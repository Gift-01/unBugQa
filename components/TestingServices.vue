<template>
  <div
    class="mx-[16px] md:mx-[165px] my-[56px] md:my-[64px] bg-[#F9FAFB] md:flex rounded-[20px] md:pl-[39px]"
  >
    <div class="my-[58px]">
      <div class="text-[#111827] space-y-4 mb-[24px]">
        <img :src="New" alt="NewBadge" />
        <p class="text-[32px] font-semibold leading-[40px] tracking-[0.64px]">
          Full-stack testing services
        </p>
        <p class="font-light text-18px leading-[28px]">
          Our QA testing services guarantee every code you ship to production
          has been tested and documented.
        </p>
      </div>
      <div
        class="space-y-5 font-light text-[16px] leading-[24px] mb-[24px] text-[#374151]"
      >
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Flexible plans designed to scale with your business</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Dedicated project manager</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Skilled QA experts</p>
        </div>
      </div>
      <div class="md:flex space-y-2">
        <button
          class="bg-[#267DFF] text-white rounded-md text-center py-[8px] px-[20px] flex justify-center"
        >
          Requset a QA Service
        </button>
        <button
          class="text-[#0063F7] font-normal text-[16px] leading-[24px] text-center ml-[12px]"
        >
          Get a free QA Audit
        </button>
      </div>
    </div>
    <div class="my-[28px]">
      <img :src="FullStack" alt="FullStackImage" />
    </div>
  </div>
</template>

<script setup>
import GreenList from "../assets/GreenList.svg";
import FullStack from "../assets/FullStack.svg";
import New from "../assets/NewIcon.svg";
</script>
