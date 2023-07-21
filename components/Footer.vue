<template>
  <div class="md:flex md:mx-[165px] md:mb-[78px] px-[64px] space-x-16 text-[#9CA3AF]">
    <div>
      <img :src="Logo" alt="UnbugQa Logo" />
      <p>© Copyright 2023 UnbugQA. All rights reserved.</p>
    </div>
    <div class="flex space-x-8">
      <div>
        <p class="leading-[24px]">Services</p>
        <div class="flex flex-col">
          <NuxtLink to="#">Hire QA Engineer</NuxtLink>
          <NuxtLink to="#">Join talent pool</NuxtLink>
          <NuxtLink to="#">For employers</NuxtLink>
          <NuxtLink to="#">For QA Engineers</NuxtLink>
        </div>
      </div>
      <div class="flex flex-col">
        <p>Resources</p>
        <div class="flex flex-col">
          <NuxtLink to="#"> FAQ</NuxtLink>
          <NuxtLink to="#">Blog</NuxtLink>
          <NuxtLink to="#">Academy</NuxtLink>
        </div>
      </div>
      <div class="flex flex-col">
        <p>Company</p>
        <div class="flex flex-col">
          <NuxtLink to="#"> About us</NuxtLink>
          <NuxtLink to="#">Contact us</NuxtLink>
          <NuxtLink to="#">Privacy Policy</NuxtLink>
          <NuxtLink to="#">Terms of use</NuxtLink>
        </div>
      </div>
      <div>
        <p>Follow us</p>
        <div class="flex space-x-4 ">
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
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/UnbugQA logo.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
</script>
