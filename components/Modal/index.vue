<template>
  <div>
    <section
      class="h-screen w-screen bg-black fixed top-0 opacity-60 z-[100]"
      @click="$emit('close-dialog')"
    ></section>

    <div class="absolute inset-0">
      <div class="h-full flex">
        <div
          class="z-[110] m-auto rounded-3xl shadow overflow-y-scroll"
          :style="{
            backgroundColor: backgroundColor,
            height: height,
            width: innerWidth < 768 ? '97%' : width,
          }"
        >
          
          <slot></slot>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const innerWidth = ref();

onMounted(() => {
  innerWidth.value = window.innerWidth;
  document.documentElement.style.overflow = "hidden";
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = "auto";
})


const props = defineProps({
  backgroundColor: { type: String, default: "#ffffff" },
  width: { type: String, default: "40%" },
  height: { type: String, default: "fit-content" },
});
</script>

<style scoped></style>
