<template>
    <div class="md:px-[10%] px-[2%] bg-[#F2F7FD] text-[#646464] py-[50px]">
        
        <div class="border-b-[1px] border-[#CACACA] flex flex-col md:flex-row justify-between pb-[50px]">
            <div class="w-full">
                <img src="/images/headerlogo.png" @click="linkClicked('home')" class="h-10 cursor-pointer"/>   
                
                <p class="mt-[20px] text-[18px]">Proof-of-Health for a Smarter,</p>
                <p class="text-[18px]">Healthier Future</p>
            </div>

            <div class="w-full py-5 md:py-0">
                <p class="text-[20px] md:text-[24px] font-semibold">Sitemap</p>

                <p class="text-[18px] cursor-pointer mt-2" @click="linkClicked('vision')">Vision</p>
                <p class="text-[18px] cursor-pointer mt-2" @click="linkClicked('howitworks')">How it works</p>
                <p class="text-[18px] cursor-pointer mt-2" @click="linkClicked('partners')">Our Partners</p>
                <p class="text-[18px] cursor-pointer mt-2" @click="linkClicked('fog')">FoG Foundation</p>

            </div>

            <div class="w-full">
                <p class="text-[20px] md:text-[24px] font-semibold">Contact Us</p>
                <p class="text-[18px] cursor-pointer mt-2">Force of Good Ltd., Jalya Place, 2nd Floor,</p>
                <p class="text-[18px] cursor-pointer">Road Town, Tortola, British Virgin Island</p>
                <p class="text-[18px] cursor-pointer">VG1110</p>

            </div>
        </div>


        <p class="mt-[50px] text-[16px] md:text-[18px]">© 2025 Force of Good Foundation. All rights reserved</p>

    </div>
</template>


<script setup>
    const emit = defineEmits(['link-clicked'])

    function linkClicked(link){
        emit('link-clicked', link);
    }
</script>