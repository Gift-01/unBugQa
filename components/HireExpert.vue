<template>
  <div class="md:flex md:mx-[165px] mx-[10px] bg-[#F9FAFB] rounded-[20px]">
    <div class="my-[58px] px-[17px] md:px-[39px] py-6 md:py-4">
      <div class="text-[#111827] space-y-4">
        <p
          class="text-lg md:text-[32px] font-extrabold md:font-semibold leading-[24px] md:leading-[40px] tracking-[-0.36px] md:tracking-[-0.64px]"
        >
          Hire Expert QA Engineers
        </p>
        <p class="text-[18px] pb-[24px] leading-[28px] font-light">
          Save time without compromising quality by hiring from our pool of
          pre-screened expert Software Quality Assurance Engineers.
        </p>
      </div>
      <div
        class="flex flex-col space-y-5 mb-[28px] md:mb-[24px] text-[#374151]"
      >
        <div class="flex font-light leading-[24px] text-[16px]">
          <img :src="list" alt="ListIcon" />
          <p>Get matched within 72 hours</p>
        </div>
        <div class="flex font-light leading-[24px]">
          <img :src="list" alt="ListIcon" />
          <p>Diverse and inclusive talent pool from 20+ countries</p>
        </div>

        <div class="flex font-light leading-[24px]">
          <img :src="list" alt="ListIcon" />
          <p>Flexible payment options</p>
        </div>
      </div>
      <div class="md:flex space-y-2">
        <button
          class="bg-[#267DFF] text-white rounded-md text-center py-[8px] px-[20px] flex justify-center"
        >
          Hire a QA Engineer
        </button>
        <button
          class="text-[#0063F7] font-normal text-[16px] leading-[24px] text-center ml-[12px]"
        >
          Apply to join talent pool
        </button>
      </div>
    </div>
    <div class="md:w-[606.258px]">
      <img :src="Hire" alt="HireIcon" />
    </div>
  </div>
</template>

<script setup>
import list from "../assets/List.svg";
import Hire from "../assets/Hire.svg";
</script>
