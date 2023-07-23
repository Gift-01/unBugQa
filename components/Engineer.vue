<template>
  <div
    class="md:flex md:mx-[165px] mx-[10px] my-[72px] md:my-[64px] bg-[#F9FAFB] rounded-[20px] space-x-[24px] md:space-x-[59px]"
  >
    <div
      class="md:mx-[39px] md:my-[58px] md:w-[630px] py-6 md:py-4 px-4 md:px-[39px]"
    >
      <div class="text-[#111827] space-y-4 mb-[24px]">
        <p
          class="text-[22px] md:text-[32px] font-bold md:font-semibold leading-[24px] md:leading-[40px] tracking-[-0.36px] md:tracking-[-0.64px]"
        >
          Become a Job-ready QA Engineer
        </p>
        <p
          class="text-lg md:text-base font-light leading-[24px] md:leading-[28px]"
        >
          Invest in your future with our QA Engineering program and become a
          valuable asset to any industry worldwide.
        </p>
      </div>
      <div class="space-y-5 text-[#374151] font-light leading-[24px] mb-[24px]">
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Comprehensive curriculum</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Expert mentors</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>100% remote</p>
        </div>
      </div>
      <div class="md:flex space-y-2 md:space-y-3 mb-[24px]">
        <button
          class="bg-[#267DFF] text-white rounded-md text-center py-[8px] md:px-[20px] px-[16px] flex justify-center font-medium"
        >
          Signup for the Academy
        </button>
        <button
          class="text-[#0063F7] font-normal text-[16px] leading-[24px] md:text-center md:px-[20px] px-[16px] md:ml-[12px] font-medium"
        >
          Request training for staff
        </button>
      </div>
    </div>
    <div>
      <img :src="Engineer" alt="Engineer'sImage" class="max-sm:hidden" />
      <img :src="EngineerTwo" alt="Engineer's Image" class="md:hidden w-[348px]" />
    </div>
  </div>
</template>

<script setup>
import GreenList from "../assets/GreenList.svg";
import Engineer from "../assets/Engineer.svg";
import EngineerTwo from "../assets/EngineerTwo.svg";
</script>
