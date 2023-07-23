<template>
  <div
    class="md:flex bg-[#E9F2FF] py-[32px] md:py-[60px] px-[36px] md:px-[60px] mx-[10px] md:mx-[167px] my-[72px] md:my-[180px] space-y-5 rounded-[20px]"
  >
    <div class="md:w-[585px]">
      <div class="space-y-2.5 mb-[24px]">
        <p
          class="text-[16px] md:text-[28px] leading-[24px] text-[#111827] tracking-[-0.56px] font-semibold"
        >
          We guarantee the high quality of your product.
        </p>
        <p class="text-[16px] font-light leading-[24px]">
          Our integrated solutions ensure your product meets the highest
          standards of quality, and we stand behind our work with a guarantee of
          satisfaction.
        </p>
      </div>
      <button
        class="bg-[#267DFF] text-white px-[24px] py-[10px] rounded-md font-medium text-[18px]"
      >
        Talk to Sales
      </button>
    </div>
    <div
      class="md:mr-[140px] bg-white md:absolute md:right-[62px] md:bottom-[-3712px] "
    >
      <img :src="Contact" alt="Contact" class="md:w-[279px]" />
    </div>
  </div>
</template>

<script setup>
import Contact from "../assets/Contact.svg";
import ContactTwo from "../assets/Contact.svg";
</script>
