<template>
  <div
    class="mx-[16px] md:mx-[165px] my-[56px] md:my-[64px] bg-[#F9FAFB] rounded-[20px] pl-4 md:pl-[39px] pr-4 md:pr-[0px] "
  >
    <div class="md:flex pt-6 md:pt-[58px] ">
      <div class="md:w-[541px]">
        <div class="text-[#111827] space-y-4 mb-[24px]">
          <div class="md:flex items-center gap-2.5">
            <img
              :src="New"
              alt="NewBadge"
              class="md:absolute md:left-[650px]"
            />
            <p
              class=" text-[18px] md:text-[32px] font-bold md:font-semibold leading-[24px] md:leading-[40px] tracking-[0.64px]"
            >
              Full-stack testing services
            </p>
          </div>
          <p class="font-light text-[18px] leading-[28px] ">
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
      <div class="my-[28px] md:pl-[32px]">
        <img :src="FullStack" alt="FullStackImage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GreenList from "../assets/GreenList.svg";
import FullStack from "../assets/FullStack.svg";
import New from "../assets/NewIcon.svg";
</script>
