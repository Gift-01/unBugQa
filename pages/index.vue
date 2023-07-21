<template>
  <!-- <p>navbar</p> -->
  <div>
    <div class="flex items-center justify-between px-[165px] py-[24px]">
      <div class="flex">
        <div>
          <img :src="logo" alt="Logo" />
        </div>
        <div>
          <NuxtLink to="#" class="text-[#111827] m-[24px]">Products</NuxtLink>
          <NuxtLink to="/about" class="text-[#111827] m-[24px]"
            >About us</NuxtLink
          >
          <NuxtLink to="/contact" class="text-[#111827] m-[24px]"
            >Contact</NuxtLink
          >
          <NuxtLink to="/blog" class="text-[#111827] m-[24px]">Blogs</NuxtLink>
        </div>
      </div>
      <div>
        <button class="bg-[#267DFF] text-white px-[20px] py-[8px] rounded-md">
          Talk to sales
        </button>
      </div>
    </div>
  </div>

  <!-- <p>Header</p> -->
  <div class="md:w-[1440px] md:py-[64px] md:px-[165px]">
    <div>
      <p
        class="text-sm leading-[20px] px-[20px] flex justify-center items-center text-[#374151]"
      >
        ONE-STOP SOLUTION FOR PRODUCT QUALITY
      </p>
      <p
        class="font-bold text-[24px] md:text-[52px] leading-[32px] md:leading-[56px] text-[#111827] tracking-[-0.48px] md:tracking-[-1.04px] pl-[52px] pr-[56px] flex justify-center items-center"
      >
        Build amazing products with UnbugQA
      </p>
      <p class="text-[#374151] text-[18px] leading-[28px] text-center m-[28px]">
        Our integrated solutions empower startups to build high-quality products
        by combining QA testing, user testing, recruitment assistance, and staff
        training.
      </p>
    </div>
    <div class="flex justify-center items-center space-x-[12px]">
      <button class="bg-[#267DFF] text-white px-[20px] py-[8px] rounded-md">
        Talk to Sales
      </button>
      <button
        class="text-[#267DFF] py-[8px] rounded-md items-center justify-center"
      >
        Learn about us
      </button>
    </div>
  </div>

  <!-- <p>Hire</p> -->
  <div class="md:flex md:mx-[165px] bg-[#F9FAFB] rounded-[20px]">
    <div class="mt-[58px] px-[39px] p-[16px]">
      <div class="text-[#111827] space-y-4">
        <p class="text-[32px] font-semibold leading-[40px] tracking-[-0.64px]">
          Hire expert QA Engineers
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
    <div>
      <img :src="Hire" alt="HireIcon" />
    </div>
  </div>

  <!-- <p>full stack testing services</p> -->
  <div
    class="mx-[16px] md:mx-[165px] my-[56px] md:my-[64px] bg-[#F9FAFB] md:flex rounded-[20px]"
  >
    <div class="mx-[39px] my-[58px]">
      <div class="text-[#111827] space-y-4 mb-[24px]">
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

  <!-- <p>User testing</p> -->
  <div
    class="bg-[#F9FAFB] md:flex md:mx-[165px] my-[56px] md:my-[64px] rounded-[20px] md:w-[1110px]"
  >
    <div class="my-[24px] md:my-[59px] mx-[16px] md:mx-[39px]">
      <div class="space-y-4 mb-[24px]">
        <p
          class="text-[#111827] text-[32px] font-semibold leading-[40px] tracking-[-0.64pz]"
        >
          User testing and feedback
        </p>
        <p class="text-[#111827] font-light text-[16px] leading-[28px]">
          Take the guesswork out of your product, design and marketing decisions
          with our all-inclusive user testing and feedback tool.
        </p>
      </div>
      <div class="space-y-5 text-[#374151] font-light leading-[24px] mb-[24px]">
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Run unlimited user tests</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Get real-time insights</p>
        </div>
        <div class="flex">
          <img :src="GreenList" alt="GreenListIcon" />
          <p>Documents findings with notes</p>
        </div>
      </div>
      <button
        class="bg-[#267DFF] text-white text-center py-[8px] px-[20px] rounded-md"
      >
        Try Our Beta
      </button>
    </div>
    <div class="h-[380.521px] rounded-[14.32px]">
      <img :src="user" alt="UserImage" />
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/UnbugQA logo.svg";
import list from "../assets/List.svg";
import Hire from "../assets/Hire.svg";
import GreenList from "../assets/GreenList.svg";
import FullStack from "../assets/FullStack.svg";
import user from "../assets/User.svg";
</script>
