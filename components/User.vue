<template>
  <div
    class="bg-[#F9FAFB] md:flex md:mx-[165px] my-[56px] md:my-[64px] rounded-[20px]"
  >
    <div
      class="md:my-[59px] mx-[16px] md:mx-[39px] px-4 md:px-[39px] py-6 md:py-4 md:w-[596px]"
    >
      <div class="space-y-4 mb-[24px]">
        <div class="md:flex items-center gap-2.5">
          <img
            :src="Beta"
            alt="BetaBadge"
            class="md:absolute md:left-[650px]"
          />
          <p
            class="text-[#111827] text-lg md:text-[32px] font-bold md:font-semibold leading-[24px] md:leading-[40px] tracking-[-0.36px] md:tracking-[-0.64pz]"
          >
            User testing and feedback
          </p>
        </div>
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
import GreenList from "../assets/GreenList.svg";
import user from "../assets/User.svg";
import Beta from "../assets/BetaIcon.svg";
</script>

<style lang="scss" scoped></style>
