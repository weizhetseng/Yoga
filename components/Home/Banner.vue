<template>
  <div class="relative">
    <img
      src="~/assets/image/header.jpeg"
      alt=""
      class="w-full object-cover object-bottom max-h-[582px] 2xl:max-h-[700px] min-[1920px]:max-h-[900px]"
    />
    <div
      class="absolute w-full md:w-3/5 top-1/2 pl-4 md:pl-0 left-0 md:left-10 lg:left-32 xl:left-45 -translate-y-1/2"
    >
      <p class="text-textGray">健身輕時尚</p>
      <h1 class="text-7 md:text-4xl text-textGray">DOYOGA，做你的瑜珈</h1>
      <h2 class="text-xl md:text-2xl mb-4 text-textGray">
        多給自己一點時間享受靜謐，傾聽內心的聲音。
      </h2>
      <div class="flex gap-2">
        <NuxtLink
          to="/reservation"
          class="text-xl text-textGray px-4 py-2 rounded bg-brown3 hover:bg-brown2 hover:text-white"
          >立即預約</NuxtLink
        >
        <NuxtLink
          to="/course"
          class="text-xl text-white px-4 py-2 rounded bg-brown2 hover:bg-brown1"
          >課程介紹</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
