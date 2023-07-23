<template>
  <div class="md:mx-[165px] mx-[20px] md:my-[150px]">
    <p
      class="text-center text-[#111827] text-[18px] md:text-[36px] font-bold leading-[24px] md:leading-[44px] tracking-[-0.36px] md:tracking-[-0.72px] my-[38px]"
    >
      Featured articles
    </p>
    <div class="md:flex space-y-14 md:space-x-8">
      <div
        class="rounded-xl"
        style="
          box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1),
            0px 4px 6px -1px rgba(16, 24, 40, 0.1);
        "
      >
        <img :src="FeatureOne" alt="ReactIcon" />
        <div class="space-y-2 p-[24px]">
          <p
            class="text-[#111827] text-[20px] font-bold leading-[28px] tracking-[-0.4px]"
          >
            Why You Should Hire a Software QA Engineer
          </p>
          <p class="text-[#6B7280] font-light leading-[24px] text-[16px]">
            If you're a software company, chances are good that you've already
            considered hiring a quality assurance...
          </p>
        </div>
      </div>
      <div
        class="rounded-xl"
        style="
          box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1),
            0px 4px 6px -1px rgba(16, 24, 40, 0.1);
        "
      >
        <img :src="FeatureTwo" alt="ReactIcon" />
        <div class="space-y-2 p-[24px]">
          <p
            class="text-[#111827] text-[20px] font-bold leading-[28px] tracking-[-0.4px]"
          >
            Building Better Products with Decentralized User Research: A Guide
            for Teams
          </p>
          <p class="text-[#6B7280] font-light leading-[24px] text-[16px]">
            User research is a critical component of product development. It
            enables teams to better understand their...
          </p>
        </div>
      </div>
      <div
        class="rounded-xl"
        style="
          box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1),
            0px 4px 6px -1px rgba(16, 24, 40, 0.1);
        "
      >
        <img :src="FeatureThree" alt="ReactIcon" />
        <div class="space-y-2 p-[24px]">
          <p
            class="text-[#111827] text-[20px] font-bold leading-[28px] tracking-[-0.4px]"
          >
            WBest Ways To Learn Software Quality Assurance Engineering
          </p>
          <p class="text-[#6B7280] font-light leading-[24px] text-[16px]">
            Software Quality Assurance Engineering (SQAE) is a critical process
            that ensures software products and...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FeatureOne from "../assets/FeatureOne.svg";
import FeatureTwo from "../assets/FeatureTwo.svg";
import FeatureThree from "../assets/FeatureThree.svg";
</script>
