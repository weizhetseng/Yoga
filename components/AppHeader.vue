<template>
  <header class="bg-brown3">
    <div class="container flex py-5">
      <NuxtLink to="/" class="flex-1">
        <img src="~/assets/image/logo.png" alt="" class="max-w-24" />
      </NuxtLink>
      <nav class="flex-1 hidden lg:block">
        <ul class="flex items-center justify-center gap-8 text-textGray leading-normal">
          <li>
            <NuxtLink to="/course">課程介紹</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/surroundings">瑜伽空間</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/curriculum">當月課表</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="flex-1 hidden lg:flex items-center justify-end gap-4 text-textGray">
        <li>
          <NuxtLink
            to="/reservation"
            class="px-4 py-2 border border-textGray rounded-2xl hover:bg-brown1 hover:text-white"
            >立即預約</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="px-4 py-2 border border-textGray rounded-2xl hover:bg-brown1 hover:text-white"
            >聯絡我們</NuxtLink
          >
        </li>
      </ul>
      <div class="flex lg:hidden flex-col gap-1 flex-1 justify-center items-end">
        <span class="w-8 h-1 bg-brown1"></span>
        <span class="w-8 h-1 bg-brown1"></span>
        <span class="w-8 h-1 bg-brown1"></span>
      </div>
    </div>
  </header>
</template>
