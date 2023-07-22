<template>
  <nav>
    <div
      class="flex items-center justify-between px-[165px] py-[24px] container mx-auto px-4"
    >
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
  </nav>
</template>

<script setup>
import logo from "../assets/UnbugQA logo.svg";
import { ref } from "vue";
</script>
