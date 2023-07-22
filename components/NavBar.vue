<template>
  <nav>
    <div
      class="flex items-center justify-between py-2 md:py-6  container mx-auto "
    >
      <div class="flex flex-1 space-x-[30px]">
        <div>
          <img :src="logo" alt="Logo" />
        </div>
        <!-- Hamburger icon for mobile menu toggle -->
        <button @click="toggleMobileMenu" class="lg:hidden">
          <img :src="Menu" alt="Menu" />
        </button>
        <!-- Mobile menu -->
        <div
          v-if="showMobileMenu"
          class="lg:hidden fixed top-0 left-0 w-full h-full bg-white"
        >
          <div class="flex flex-col items-center">
            <NuxtLink
              to="#"
              class="text-[#111827] m-6 mt-[80px] block"
              @click="toggleMobileMenu"
              >Products</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="text-[#111827] m-6 block"
              @click="toggleMobileMenu"
              >About us</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="text-[#111827] m-6 block"
              @click="toggleMobileMenu"
              >Contact</NuxtLink
            >
            <NuxtLink
              to="/blog"
              class="text-[#111827] m-6 block"
              @click="toggleMobileMenu"
              >Blogs</NuxtLink
            >
            <div>
              <button
                class="bg-[#267DFF] text-white px-[20px] py-[8px] rounded-md"
              >
                Talk to sales
              </button>
            </div>
          </div>
        </div>
        <!-- End Mobile menu -->
        <!-- Desktop menu -->
        <div class="hidden lg:flex space-x-6 flex items-center">
          <NuxtLink to="#" class="text-[#111827] flex ">Products
            <img :src="Dropdown" alt="DropdownIcon" class="text-[#111827]"/>
          </NuxtLink>
          <NuxtLink to="/about" class="text-[#111827]"
            >About us</NuxtLink
          >
          <NuxtLink to="/contact" class="text-[#111827]"
            >Contact</NuxtLink
          >
          <NuxtLink to="/blog" class="text-[#111827] ">Blogs</NuxtLink>
        </div>
        <!-- End Desktop menu -->
      </div>
      <div class="hidden md:block">
        <button class="bg-[#267DFF] text-white px-[20px] py-[8px] rounded-md">
          Talk to sales
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/UnbugQA logo.svg";
import Menu from "../assets/Menu.svg";
import Dropdown from "../assets/DropDown.svg"

const showMobileMenu = ref(false);

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}
</script>

<style>
/* Add your existing styles here */

/* Mobile Menu Styles */
@media (max-width: 767px) {
  .lg:hidden {
    display: block;
  }

  .hidden {
    display: none;
  }
}
</style>
