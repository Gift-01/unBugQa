<template>
    <div
    class="bg-[#F9FAFB] md:flex md:mx-[165px] my-[56px] md:my-[64px] rounded-[20px] md:w-[1110px]"
  >
    <div class="my-[24px] md:my-[59px] ml-[16px] md:ml-[39px]">
      <div class="space-y-4 mb-[24px]">
        <img :src="Beta" alt="BetaBadge" class="flex" />
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
import GreenList from "../assets/GreenList.svg";
import user from "../assets/User.svg";
import Beta from "../assets/BetaIcon.svg";
</script>

<style lang="scss" scoped>

</style>