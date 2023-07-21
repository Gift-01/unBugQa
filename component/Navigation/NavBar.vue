<template>
  <div class="items-center justify-around ]">
    <div >
      <div class="">
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
    <div class="bg-red-500">
      <button class="bg-red-500">Talk to sales</button>
    </div>
  </div>
</template>

<script setup>
import logo from "../../assets/UnbugQA logo.svg";
</script>
