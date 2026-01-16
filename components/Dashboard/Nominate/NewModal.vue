<template>
  <div v-if="show" class="modal-backdrop">
    <div class="modal-card">
      <h2>Nominate a Wallet</h2>

      <!-- Instruction -->
      <p class="instruction">
        Please enter a valid <strong>EVM-compatible wallet address</strong>
        (Ethereum, Polygon, BNB Chain, etc.).
      </p>

      <!-- Input -->
      <input
        v-model="address"
        placeholder="0x... wallet address"
        class="modal-input"
      />

      <!-- Error message -->
      <p v-if="error" class="error-text">{{ error }}</p>

      <!-- Generated link -->
      <!-- <div v-if="isValid" class="link-box">
        <p>Share this link with your nominee:</p>
        <div class="copy-row">
          <input type="text" readonly :value="shareLink" class="link-input" />
          <button @click="copyLink" class="copy-btn">
            {{ copied ? "Copied!" : "Copy" }}
          </button>
        </div>
      </div> -->

      <!-- Actions -->
      <div class="modal-actions">
        <button @click="confirm" :disabled="!isValid" class="confirm-btn">
          Confirm
        </button>
        <button @click="$emit('close')" class="cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"

const props = defineProps({ show: Boolean })
const emit = defineEmits(["close", "confirm"])

const address = ref("")
const error = ref("")
const copied = ref(false)

// Regex for EVM addresses
const isValid = computed(() => /^0x[a-fA-F0-9]{40}$/.test(address.value))

const shareLink = computed(() => {
  return isValid.value
    ? `https://uht.app/nominate?ref=${address.value}`
    : ""
})

watch(() => props.show, (val) => {
  if (val) {
    address.value = ""
    error.value = ""
    copied.value = false
  }
})

function confirm() {
  if (!isValid.value) {
    error.value = "Only valid EVM wallet addresses are allowed."
    return
  }
  emit("confirm", address.value)
}

function copyLink() {
  navigator.clipboard.writeText(shareLink.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 400px;
  color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
}
.modal-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.instruction {
  font-size: 14px;
  color: #555;
  background: #f1f1f1;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.modal-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 8px;
}
.error-text {
  color: #e74c3c;
  font-size: 13px;
  margin-bottom: 12px;
}
.link-box {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px;
  margin: 12px 0;
}
.copy-row {
  display: flex;
  align-items: center;
  margin-top: 6px;
  gap: 6px;
}
.link-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 13px;
}
.copy-btn {
  padding: 8px 12px;
  background: #6a44ff;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 13px;
  cursor: pointer;
}
.copy-btn:hover {
  background: #4e28d4;
}
.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 16px;
}
.confirm-btn {
  padding: 8px 14px;
  background: #6a44ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.confirm-btn:disabled {
  background: gray;
  cursor: not-allowed;
}
.cancel-btn {
  padding: 8px 14px;
  background: #eee;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.cancel-btn:hover {
  background: #ddd;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
