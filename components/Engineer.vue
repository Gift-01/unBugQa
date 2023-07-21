<template>
  <div
    class="md:flex md:mx-[165px] my-[72px] md:my-[64px] bg-[#F9FAFB] rounded-[20px]"
  >
    <div class="md:mx-[39px] md:my-[58px]">
      <div class="text-[#111827] space-y-4 mb-[24px]">
        <p class="text-[32px] font-semibold leading-[40px] tracking-[-0.64px]">
          Become a Job-ready QA Engineer
        </p>
        <p class="text-[16px] font-light leading-[28px]">
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
          class="text-[#0063F7] font-normal text-[16px] leading-[24px] text-centerpy-[8px] md:px-[20px] px-[16px] ml-[12px] font-medium"
        >
          Request training for staff
        </button>
      </div>
    </div>
    <div>
      <img :src="Engineer" alt="Engineer'sImage" />
    </div>
  </div>
</template>

<script setup>
import GreenList from "../assets/GreenList.svg";
import Engineer from "../assets/Engineer.svg";
</script>
