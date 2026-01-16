<template>
    <div class="h-screen overflow-hidden relative">

        <Header class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" @link-clicked="tabClicked" />

        <img class="absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-[70%] md:h-screen"
            :src="(width < 764) ? '/images/home-bg-mini.jpg' : '/images/home-bg.jpg'" />


        <div class="min-h-screen overflow-y-auto absolute top-0 left-0 right-0 bottom-0 z-10">

            <div class="md:px-[10%] px-[2%] h-fit pt-[130px] md:pt-[180px] flex flex-col items-center md:items-start justify-center md:w-[55%]"
                id="home">
                <p class="text-[18px] md:text-[18px] font-semibold">UHT turns healthy living into real rewards. By
                    blending blockchain and wellness, we give people everywhere the chance to earn while building a
                    healthier world. With UHT, your lifestyle is your wealth.</p>

                <p
                    class="mt-4 text-[#7C58F2] font-extrabold text-[25px] leading-[30px] md:text-[35px] md:leading-[40px]">
                    UHT
                    Reward cycle</p>
                <p class="text-[#7C58F2] font-extrabold text-[25px] leading-[30px] md:text-[35px] md:leading-[40px]">
                    Season 2.</p>

                <p class="mt-4 text-[18px] md:text-[18px] font-semibold">Season 2 is open to the entire community, no
                    ICO required. This is the final pre-launch stage, designed to welcome everyone before we go live.
                </p>

                <ul class="mt-1 font-semibold">
                    <li><b>Inclusive Rewards</b> – Whether you’re new or returning, everyone starts fresh in Season 2.
                    </li>
                    <li><b>Treasure Hunt Experience</b> – Join fun challenges and earn UHT multipliers.</li>
                    <li><b>Final Airdrop Schedule</b> – The last distribution happens just before launch, securing your
                        tokens ahead of mainnet.</li>
                    <li><b>Tiered Bonuses</b> – Early sign-ups and the most active community members get boosted
                        allocations.</li>
                </ul>

                <div class="flex items-center mt-6">
                    <!-- <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2] mr-6"
                        @click="() => disconnectClicked()" v-if="isWalletConnected">Disconnect Wallet</button>

                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2] mr-6"
                        @click="() => " v-else>Learn More</button> -->

                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                        @click="() => tabClicked('newsletter')">Join Here</button>
                </div>

                <!-- <div class="flex items-center mt-6">
                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2] mr-6"
                        @click="() => disconnectClicked()" v-if="isWalletConnected">Disconnect Wallet</button>

                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2] mr-6"
                        @click="() => tabClicked('howitworks')" v-else>Learn More</button>

                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                        @click="() => toggleClaimModal(true)" v-if="isWalletConnected">View Allocation</button>

                    <button
                        class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                        @click="() => connectClicked()" v-else>{{ (connectLoading) ? 'Connecting...' : 'Connect Wallet'}}</button>
                </div> -->
            </div>


            <div class="md:px-[10%] px-[2%]" id="vision">
                <div class="w-full h-[80px] bg-gradient-to-b from-transparent to-white"></div>

                <div class="flex flex-col items-center pt-10 bg-white">
                    <p
                        class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                        Vision</p>

                    <div class="w-full flex flex-col md:flex-row items-center justify-evenly mt-7">
                        <div class="w-full">
                            <img src="/images/vision.jpg" class="w-full" />
                        </div>

                        <div
                            class="w-full md:px-[100px] flex flex-col items-center mt-5 md:mt-0 text-center md:text-start">
                            <div>
                                <p class="text-[25px] leading-[30px] md:text-[32px] md:leading-[37px] font-bold">From
                                    Data to Impact: The </p>
                                <p class="text-[25px] leading-[30px] md:text-[32px] md:leading-[37px] font-bold">
                                    Proof-of-Health Revolution</p>

                                <p class="mt-4 text-[18px] md:text-[22px]">UHT transforms <span
                                        class="text-[#592C82] font-bold">individual health journeys into a decentralized
                                        system of value,</span> driving better outcomes, groundbreaking science, and
                                    accessibility at scale.</p>
                                <p class="mt-4 text-[18px] md:text-[22px]">Our blockchain-powered ecosystem merges <span
                                        class="text-[#592C82] font-bold">health data and rewards,</span> fostering a
                                    global preventive care movement.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div class="md:px-[10%] px-[2%] flex flex-col items-center pt-[200px] text-center md:text-start bg-white"
                id="fog">
                <p
                    class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                    Transforming Health into Value</p>

                <div class="w-full h-[400px] md:h-[500px] relative">

                    <div class="mt-10 w-full absolute top-0 left-0 right-0"
                        v-for="(item, index) in transformingHealthList">

                        <Transition name="fade" mode="out-in">
                            <div v-if="currentTransformingHealth == index && showTransformingHealthItem" :key="index"
                                class="flex flex-col md:flex-row items-center justify-between">
                                <div class="w-full">
                                    <p class="font-bold text-[25px] md:text-[32px]">{{ item.title }}</p>

                                    <p class="mt-4 text-[18px] md:w-[75%]">{{ item.text }}</p>
                                </div>

                                <div class="w-full">
                                    <img :src="item.img" class="w-full" />
                                </div>
                            </div>
                        </Transition>


                    </div>
                </div>


            </div>




            <div class="md:px-[10%] px-[2%] flex flex-col items-center pt-[200px] bg-white" id="howitworks">
                <p
                    class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                    How It Works</p>

                <p
                    class="text-[25px] leading-[30px] md:text-[32px] md:leading-[37px] font-semibold md:font-bold mt-5 md:mt-3">
                    How Proof-of-Health Works</p>


                <div class="flex flex-col md:flex-row items-center justify-evenly w-full mt-10">
                    <div class="w-full h-[170px] md:h-[250px] flex flex-col justify-between">
                        <div v-for="item in [
                            {
                                img: '/images/earn-rewards.png',
                                title: 'Earn Rewards:',
                                text: 'Receive dynamic incentives for preventive health actions.'
                            },
                            {
                                img: '/images/track-health.png',
                                title: 'Track Your Health:',
                                text: 'Sync wearables or health apps to securely log data on-chain.'
                            }
                        ]" class="flex items-center w-full">

                            <img :src="item.img" class="h-[60px]" />

                            <div class="pl-[20px] w-[80%]">
                                <p class="text-[#592C82] text-[18px] md:text-[22px] font-bold">{{ item.title }}</p>
                                <p class="text-[16px] md:text-[20px] font-light">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full !hidden md:!inline-block">
                        <img src="/images/uhtlogo.png" />
                    </div>



                    <div class="w-full h-[170px] md:h-[250px] mt-4 md:mt-0 flex flex-col justify-between">
                        <div v-for="item in [
                            {
                                img: '/images/shop-smart.png',
                                title: 'Shop Smart:',
                                text: 'Use tokens for products and services that enhance your health.'
                            },
                            {
                                img: '/images/drive-innovation.png',
                                title: 'Drive Innovation:',
                                text: 'Share anonymized data with Decentralized Science projects.'
                            }
                        ]" class="flex items-center w-full">

                            <img :src="item.img" class="h-[60px]" />

                            <div class="pl-[20px] w-[80%]">
                                <p class="text-[#592C82] text-[18px] md:text-[22px] font-bold">{{ item.title }}</p>
                                <p class="text-[16px] md:text-[20px] font-light">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            <div class="md:px-[10%] px-[2%] flex flex-col items-center py-[200px] text-center md:text-start bg-white">
                <p
                    class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                    Unlocking a New Era in Healthcare</p>

                <div class="w-full h-[600px] md:h-[500px] relative">

                    <div class="mt-10 w-full absolute top-0 left-0 right-0"
                        v-for="(item, index) in newEraHealthcareList">

                        <Transition name="fade" mode="out-in">
                            <div v-if="currentEraHealthcare == index && showEraHealthcareItem" :key="index"
                                class="flex flex-col md:flex-row items-center justify-between bg-[#F6F6F6] rounded-[40px]">
                                <div class="md:w-[40%] w-full rounded-[40px]">
                                    <img :src="item.img" class="w-full rounded-[50px]" />
                                </div>

                                <div class="md:w-[60%] w-full px-[5%] py-[30px] md:py-0">
                                    <p class="font-bold text-[32px]">{{ item.title }}</p>

                                    <p class="mt-4 text-[18px] md:w-[75%]">{{ item.text }}</p>
                                </div>
                            </div>
                        </Transition>


                    </div>
                </div>
            </div>



            <div class="h-screen relative bg-white">
                <img src="/images/action-bg.jpg"
                    class="absolute top-0 left-0 right-0 h-screen bottom-0 w-full object-cover z-0" />

                <div
                    class="md:px-[10%] text-center md:text-start px-[2%] flex flex-col items-center md:justify-between absolute top-0 left-0 right-0 bottom-0 w-full z-10 pt-[100px] ">
                    <p
                        class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                        How it action</p>

                    <div class="text-white md:w-[45%] self-start pt-[20px] md;pt-0 pb-[150px]">
                        <p class="font-bold text-[22px] md:text-[32px]">Join the Proof-of-Health</p>
                        <p class="font-bold text-[22px] md:text-[32px]">Revolution</p>

                        <p class="mt-4 text-[18px] md:w-[75%]">Be part of a decentralized healthcare system that rewards
                            health, empowers research, and transforms global well-being</p>
                    </div>
                </div>
            </div>



            <div class="md:px-[10%] px-[2%] flex flex-col items-center pt-[200px] text-center md:text-start bg-white"
                id="partners">
                <p
                    class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                    Partners</p>

                <p class="text-[25px] leading-[30px] md:text-[32px] md:leading-[37px] font-bold mt-3">Our Ecosystem
                    Partners & Investors</p>

                <p class="text-[18px] md:text-[22px] text-center mt-3">UHT collaborates with industry leaders in
                    blockchain, healthcare, and e-commerce to create a seamless and impactful Proof-of-Health ecosystem.
                </p>

                <div
                    class="mt-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-4 md:gap-4 place-items-center max-h-screen overflow-y-scroll">
                    <img v-for="(item, index) in 8" :src="`/images/partners${index + 1}.jpeg`"
                        class="h-[100px] md:h-[120px]" />
                </div>

            </div>






            <div class="md:px-[10%] px-[2%] flex flex-col items-center pt-[200px] bg-white">
                <p
                    class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
                    Advisors</p>

                <div class="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-10 place-items-center">

                    <div v-for="item in [
                        {
                            img: '/images/yat_sui.png',
                            name: 'Yat Siu',
                            title: 'Co-founder & Chairman',
                            organization: 'Animoca Brands'
                        },
                        {
                            img: '/images/vishal.png',
                            name: 'Vishal Gondal',
                            title: 'Founder & CEO',
                            organization: 'GOQii Foundation'
                        },
                        {
                            img: '/images/zeneca.png',
                            name: 'Zeneca',
                            title: 'Founder',
                            organization: 'Zen Academy'
                        }
                    ]"
                        class="w-[300px] pb-[20px] border-[4px] border-[#F9F9F9] rounded-[40px] flex flex-col items-center mt-6">

                        <img :src="item.img" class="h-[300px] w-full rounded-[40px]" />

                        <p class="text-[24px] mt-6 font-semibold">{{ item.name }}</p>

                        <p class="text-[18px] mt-4 font-semibold">{{ item.title }}</p>
                        <p class="text-[18px] font-semibold">{{ item.organization }}</p>
                    </div>

                </div>


                <div class="mt-[100px] grid grid-cols-1 md:grid-cols-4 gap-x-2 sm:gap-x-4 md:gap-10 place-items-center">

                    <div v-for="(item, index) in [
                        {
                            name: 'Agastya Samat',
                            title: 'Director',
                            organization: 'Force of Good Foundation'
                        },
                        {
                            name: 'Marathon (EMEA)',
                            title: 'Head of Tokenomics',
                            organization: 'Animoca Brands'
                        },
                        {
                            name: 'Animoca Brands',
                            title: 'Founding Partner',
                            organization: 'Delta Blockchain Fund'
                        },
                        {
                            name: 'Tarun Katial',
                            title: 'Founder & CEO',
                            organization: 'Coto'
                        },
                        {
                            name: 'Lauren Selig',
                            title: 'Founder & CEO',
                            organization: 'Shake and Bake'
                        },
                        {
                            name: 'Manish Agarwal',
                            title: 'Council Member',
                            organization: 'KGen'
                        },
                        {
                            name: 'Manish Dureja',
                            title: 'Ex MD & CEO',
                            organization: 'Intermiles'
                        },
                        {
                            name: 'Manoj Narender',
                            title: 'MD',
                            organization: 'Marathon (EMEA)'
                        }
                    ]"
                        class="w-[280px] pb-[20px] mt-5 border-[4px] border-[#F9F9F9] rounded-[40px] flex flex-col items-center">

                        <img :src="`/images/advisors${index + 1}.png`" class="h-[300px] w-full rounded-[40px]" />

                        <p class="text-[24px] mt-6 font-semibold">{{ item.name }}</p>

                        <p class="text-[18px] mt-4 font-semibold">{{ item.title }}</p>
                        <p class="text-[18px] font-semibold">{{ item.organization }}</p>
                    </div>

                </div>
            </div>

            <Newsletter />

            <div class="pt-[200px] bg-white">
                <Footer @link-clicked="tabClicked" />
            </div>


        </div>







        <Claim v-if="showClaimModal" @close="() => toggleClaimModal(false)" />
    </div>
</template>

<script setup>
import { getWindowDimensions } from '../../utils/Dimensions'
import { getIsConnected, getProvider, openModal, getAddress, subscribeState, getChainID, disconnectWallet } from '../../apiss/web3/walletconnect';
import { getBalance as getUHTBalance } from '../../apiss/web3/uht'
import { create as saveClaimedAddress, getAll as getAllClaimedAddresses } from '../../apiss/claim'

const auth = useAuth()
const showClaimModal = ref(false)
const connectLoading = ref(false)
const hasInitializedMobile = ref(false)
const isWalletConnected = ref(false);
const walletAddress = ref('');
const currentTransformingHealth = ref(0);
const currentEraHealthcare = ref(0);
const transformingHealthInterval = ref(null);
const eraHealthcareInterval = ref(null);
const showTransformingHealthItem = ref(false);
const showEraHealthcareItem = ref(false);
const transformingHealthList = ref([
    {
        img: '/images/slider-Health-Marketplace.7e22a35193f49325fd74.jpg',
        title: 'Health Marketplace',
        text: 'With over 300+ e-commerce partners, your earned UHT tokens can be used to purchase fitness programs, wellness treatments, and premium health products-creating a seamless loop of healthier living and spending.'
    },
    {
        img: '/images/slider-Health-Data.5d21be8bbe701102308a.jpg',
        title: 'User-Owned Health Data',
        text: 'UHT ensures your health data is securely stored on-chain, putting you in control to share it only when it benefits you - whether for earning rewards, accessing personalized care, or unlocking better insurance options.'
    },
    {
        img: '/images/slider-Gamified-Preventive-Healthcare.f9b62846cb8c1f649842.jpg',
        title: 'Gamified Preventive Healthcare',
        text: 'Turn wellness into a rewarding journey. UHT\'s Proof-of-Health protocol gamifies everyday health actions, incentivizing users with dynamic rewards that improve their well-being while advancing healthcare innovation.'
    },
    {
        img: '/images/slider-Decentralized-Science.a21bc01cca31b8771b2e.jpg',
        title: 'Decentralized Science (DeSci)',
        text: 'Empower by sharing anonymized health data with projects you believe in, advancing science while earning rewards for fueling the future of healthcare innovation.'
    }
])

const newEraHealthcareList = ref([
    {
        img: '/images/slider-Healthcare-1.1f06694de1e4a4c6a809.jpg',
        title: 'Blockchain-Powered Data Lake',
        text: 'Enable personalized solutions by consenting to share preventive health data with trusted providers, unlocking tailored insurance plans, bespoke treatments, and revolutionary health innovations'
    },
    {
        img: '/images/slider-Healthcare-2.2697b4f77a71fa6616de.jpg',
        title: 'Leveraging Wearable Tech',
        text: 'With millions of data points generated daily by devices and apps, UHT transforms raw health data into actionable insights, fueling a smarter, healthier, and more connected global population'
    },
    {
        img: '/images/slider-Healthcare-3.b16d55bc52319f9de97d.jpg',
        title: 'Fighting Chronic Diseases',
        text: 'Chronic diseases are the top global killers. UHT\'s Proof-of-Health protocol empowers prevention by Identifying risks early and enabling precision care tc save millions of lives.'
    },
    {
        img: '/images/slider-Healthcare-4.303d968377e164707e1d.jpg',
        title: 'Advancing Biomedical Breakthroughs',
        text: 'UHT connects anonymized user data with cutting-edge research projects, driving groundbreaking discoveries while rewarding users for their contributions.'
    },

])
const width = ref(1200);

function tabClicked(newLink) {
    document.getElementById(newLink).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}

function connectClicked() {
    if (connectLoading.value) return;

    connectLoading.value = true;
    openModal().finally(() => connectLoading.value = false);

}

function disconnectClicked() {
    disconnectWallet()
        .then(() => {
            isWalletConnected.value = false;
            walletAddress.value = ''
        })
}


onMounted(() => {
    // This code only runs in the browser
    const dimensions = getWindowDimensions();
    if (dimensions) {
        width.value = dimensions.width;
    }

    // Optional: Update width on window resize
    window.addEventListener('resize', () => {
        width.value = window.innerWidth;
    });

    
    isWalletConnected.value = getIsConnected();
    walletAddress.value = getAddress();
})



watch(() => auth.value.walletAddress, () => {
    console.log("connectaddress: ", walletAddress.value)

    walletAddress.value = auth.value.walletAddress;
    isWalletConnected.value = auth.value.isWalletConnected
})


watch(() => isWalletConnected.value, () => {
    if (isWalletConnected.value) {
        getUHTBalance()
            .then(result => {
                useAuth().value.uhtbalance = result;
            })
    }
})

onMounted(() => {
    let index = 3;
    currentTransformingHealth.value = 3
    transformingHealthInterval.value = setInterval(() => {
        index = index === 3 ? 0 : index + 1;
        currentTransformingHealth.value = index;
    }, 5000);
})

watch(() => currentTransformingHealth.value, () => {
    showTransformingHealthItem.value = false;
    setTimeout(() => {
        showTransformingHealthItem.value = true;
    }, 500)
})




onMounted(() => {
    let index = 3;
    currentEraHealthcare.value = 3
    eraHealthcareInterval.value = setInterval(() => {
        index = index === 3 ? 0 : index + 1;
        currentEraHealthcare.value = index;
    }, 5000);
})

watch(() => currentEraHealthcare.value, () => {
    showEraHealthcareItem.value = false;
    setTimeout(() => {
        showEraHealthcareItem.value = true;
    }, 500)
})

onBeforeUnmount(() => {
    clearInterval(transformingHealthInterval.value);
    clearInterval(eraHealthcareInterval.value);
});



function toggleClaimModal(value) {
    scrollUp(value);
    showClaimModal.value = value;
}

function scrollUp(value) {
    if (value) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}


onMounted(async () => {
    const claimedAddresses = await getAllClaimedAddresses();
    useAuth().value.claimedAddresses = claimedAddresses?.map(i => i.address) || []
})


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>