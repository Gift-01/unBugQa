<template>
  <footer class="py-6 md:grid md:grid-cols-5 md:gap-8 md:px-16 md:mb-8">
    <div class="md:text-[#6B7280] mb-4 md:mb-0">
      <img :src="Logo" alt="UnbugQa Logo" />
      <p class="text-sm">© Copyright 2023 UnbugQA. All rights reserved.</p>
    </div>
    <div class="md:space-y-4">
      <p class="text-sm leading-[24px] mb-2">Services</p>
      <div class="flex flex-col text-[#6B7280]">
        <NuxtLink to="#">Hire QA Engineer</NuxtLink>
        <NuxtLink to="#">Join talent pool</NuxtLink>
        <NuxtLink to="#">For employers</NuxtLink>
        <NuxtLink to="#">For QA Engineers</NuxtLink>
      </div>
    </div>
    <div class="md:space-y-4">
      <p class="text-sm mb-2">Resources</p>
      <div class="flex flex-col text-[#6B7280]">
        <NuxtLink to="#">FAQ</NuxtLink>
        <NuxtLink to="#">Blog</NuxtLink>
        <NuxtLink to="#">Academy</NuxtLink>
      </div>
    </div>
    <div class="md:space-y-4">
      <p class="text-sm mb-2">Company</p>
      <div class="flex flex-col text-[#6B7280]">
        <NuxtLink to="#">About us</NuxtLink>
        <NuxtLink to="#">Contact us</NuxtLink>
        <NuxtLink to="#">Privacy Policy</NuxtLink>
        <NuxtLink to="#">Terms of use</NuxtLink>
      </div>
    </div>
    <div class="md:ml-auto ">
      <p class="text-sm mb-2">Follow us</p>
      <div class="flex space-x-4">
        <NuxtLink to="www.twitter.com">
          <img :src="Facebook" alt="Twitter Icon" />
        </NuxtLink>
        <NuxtLink to="www.twitter.com">
          <img :src="Twitter" alt="Twitter Icon" />
        </NuxtLink>
        <NuxtLink to="www.instagram.com">
          <img :src="Instagram" alt="Instagram Icon" />
        </NuxtLink>
        <NuxtLink to="www.linked.com">
          <img :src="LinkedIn" alt="Linked Icon" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>




<script setup>
import Logo from "../assets/UnbugQA logo.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
</script>
