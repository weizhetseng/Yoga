<template>
  <footer class="bg-brown1">
    <div class="border-b border-white">
      <div class="container">
        <div class="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <p class="text-2xl md:text-7 text-white">現在訂閱，獲得課程優惠碼！</p>
          <form action="" class="text-xl flex rounded overflow-hidden">
            <input
              type="text"
              placeholder="輸入您的電子信箱"
              class="px-4 py-2 text-brown1 outline-none"
            />
            <button type="submit" class="px-4 py-2 bg-brown2 text-white">訂閱</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container flex py-8">
      <div class="w-2/3 flex flex-col lg:flex-row gap-2">
        <ul class="text-white flex-1">
          <li class="mb-2 last:mb-0">
            <NuxtLink to="/">
              <img src="~/assets/image/logo-white.png" alt="" class="w-24" />
            </NuxtLink>
          </li>
          <li class="mb-2 last:mb-0">
            <NuxtLink to="/course">課程介紹</NuxtLink>
          </li>
          <li class="mb-2 last:mb-0">
            <NuxtLink to="/surroundings">瑜珈空間</NuxtLink>
          </li>
          <li class="mb-2 last:mb-0">
            <NuxtLink to="/curriculum">當月課表</NuxtLink>
          </li>
        </ul>
        <p class="text-white flex-1 mt-auto text-left lg:text-center">
          © 2021. All Rights Reserved.
        </p>
      </div>

      <ul class="flex items-start gap-2 w-1/3 justify-end">
        <li>
          <a href="#" target="_blank">
            <Icon class="text-2xl text-white" name="ic:outline-facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Icon class="text-2xl text-white" name="iconoir:instagram" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Icon class="text-2xl text-white" name="mage:line" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
