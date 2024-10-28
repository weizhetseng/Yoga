<script setup lang="ts">
const mobile = ref<HTMLElement | null>(null)

const isNav = ref(false)
const mobileHeight = ref(0)

function toggleNav() {
  isNav.value = !isNav.value

  if (mobile.value) {
    mobileHeight.value = mobile.value.scrollHeight
  }
}

watch(
  () => isNav.value,
  () => {
    if (isNav.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
)
</script>

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
            <NuxtLink to="/surroundings">瑜珈空間</NuxtLink>
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
      <div
        class="flex lg:hidden flex-col cursor-pointer gap-1 flex-1 justify-center items-end"
        @click="toggleNav"
      >
        <span class="w-8 h-1 bg-brown1"></span>
        <span class="w-8 h-1 bg-brown1"></span>
        <span class="w-8 h-1 bg-brown1"></span>
      </div>
    </div>
  </header>
  <div
    class="fixed w-full duration-500 bg-brown3 top-[70.34px] left-0 z-50 border-t border-brown1 overflow-hidden"
    :class="isNav ? 'h-full opacity-100 p-10' : 'h-0 opacity-0'"
    ref="mobile"
  >
    <ul class="">
      <li
        class="mb-5 last:mb-0 duration-300 delay-[50ms]"
        :class="isNav ? 'translate-x-0' : '-translate-x-1/4'"
        :style="{ animationDelay: isNav ? '.35s' : '0s' }"
      >
        <NuxtLink
          to="/course"
          class="text-brown1 text-2xl font-bold text-center block"
          @click="isNav = false"
          >課程介紹</NuxtLink
        >
      </li>
      <li
        class="mb-5 last:mb-0 duration-300 delay-100"
        :class="isNav ? 'translate-x-0' : '-translate-x-1/4'"
        :style="{ animationDelay: isNav ? '.4s' : '0s' }"
      >
        <NuxtLink
          to="/surroundings"
          class="text-brown1 text-2xl font-bold text-center block"
          @click="isNav = false"
          >瑜珈空間</NuxtLink
        >
      </li>
      <li
        class="mb-5 last:mb-0 duration-300 delay-150"
        :class="isNav ? 'translate-x-0' : '-translate-x-1/4'"
        :style="{ animationDelay: isNav ? '.45s' : '0s' }"
      >
        <NuxtLink
          to="/curriculum"
          class="text-brown1 text-2xl font-bold text-center block"
          @click="isNav = false"
          >當月班表</NuxtLink
        >
      </li>
      <li
        class="mb-5 last:mb-0 duration-300 delay-200"
        :class="isNav ? 'translate-x-0' : '-translate-x-1/4'"
        :style="{ animationDelay: isNav ? '.5s' : '0s' }"
      >
        <NuxtLink
          to="/reservation"
          class="text-brown1 text-2xl font-bold text-center block"
          @click="isNav = false"
          >立即預約</NuxtLink
        >
      </li>
      <li
        class="mb-5 last:mb-0 duration-300 delay-[250ms]"
        :class="isNav ? 'translate-x-0' : '-translate-x-1/4'"
        :style="{ animationDelay: isNav ? '.55s' : '0s' }"
      >
        <NuxtLink
          to="/contact"
          class="text-brown1 text-2xl font-bold text-center block"
          @click="isNav = false"
          >聯絡我們</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
