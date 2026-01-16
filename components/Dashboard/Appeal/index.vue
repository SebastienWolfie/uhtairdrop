<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Leaderboard Logo"
               onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'"/>
          <span class="brand-title">Appeal Form</span>
        </div>
        <span class="badge">Submit Request</span>
      </header>


      <p v-if="showSuccessModal" class="text-green-200 mt-5 text-[20px]">Appeal submitted sucessfully</p>


      <section class="appeal-form">
        <h1>Submit an Appeal</h1>
        <div>
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="auth.username" disabled/>
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="auth.email" disabled/>
          </div>

          <div class="form-group">
            <label>Address</label>
            <input type="text" v-model="auth.walletAddress" disabled/>
          </div>

          <div class="form-group">
            <label>Reason</label>
            <textarea v-model="reason" rows="5"></textarea>
          </div>

          <button @click="() => submitAppeal()" class="submit-btn">{{(loading) ? 'Submitting...' : 'Submit Appeal'}}</button>
        </div>
      
        <div v-if="error" class="flex items-center mt-4">
            <p class="text-[#fd9797] font-bold text-[14px] border-[2px] border-[#fd9797] rounded-full leading-[14px] px-[5px]">!</p>

            <p class="text-[#fd9797] text-[14px] !ml-1 font-light">{{ error }}</p>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
import { create } from '../../../api/appeal'
const auth = useAuth()
const loading = ref(false)
const error = ref('')
const showSuccessModal = ref(false);
const reason = ref("")




    function submitAppeal() {
        if (loading.value) return;

        error.value = '';

        if (!reason.value) {
            error.value = "Please enter your reason";
            return;
        }

        loading.value = true;


        create({
            email: auth.value.email,
            username: auth.value.username,
            address: auth.value.walletAddress,
            reason: reason.value
        })
        .then(data => {
            loading.value = false
            reason.value = ''
            toggleSuccessModal(true)
            error.value=false
        })
        .catch(err => {
            console.log(err)
            switch(err.code) {
                case 'auth/network-request-failed':
                    error.value = "There seems to be a network error"
                break

                default:
                    error.value = "An error occured"
            }
            loading.value = false;
        })
    }




    function toggleSuccessModal(value) {
        showSuccessModal.value = value;

        setTimeout(()=> {
            showSuccessModal.value = false
        }, 3000)
    }
</script>

<style scoped>
.body {
  font-family: Inter, sans-serif;
  color: white;
  background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height: 100vh;
}

.container { max-width:700px; margin:0 auto; padding:24px; }

header { display:flex; align-items:center; gap:14px; margin-bottom:24px; }
.uht-mark { display:flex; align-items:center; gap:12px; }
.uht-mark img { width:56px; height:56px; }
.brand-title { font-weight:800; font-size:clamp(24px,3vw,32px); }
.badge { padding:6px 10px; border-radius:999px;
  background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(6px); }

.appeal-form h1 { font-size:26px; margin-bottom:20px; }

form { display:flex; flex-direction:column; gap:16px; }

.form-group { display:flex; flex-direction:column; gap:6px; }
label { font-weight:600; }
input, textarea {
  padding:12px 14px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(255,255,255,.08);
  color:white;
  font-size:16px;
}
input:focus, textarea:focus {
  outline:none;
  border-color:#fff;
  background:rgba(255,255,255,.12);
}

.submit-btn {
  margin-top:12px;
  padding:12px 18px;
  border:none;
  border-radius:12px;
  background:#fff;
  color:#5b32ff;
  font-weight:700;
  font-size:16px;
  cursor:pointer;
  transition: all .2s ease;
}
.submit-btn:hover {
  background:#e2e2ff;
  transform: scale(1.03);
}
</style>
