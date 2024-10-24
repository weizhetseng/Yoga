<script setup lang="ts">
useSeoMeta({
  title: '立即預約-完成預約 | DOYOGA 瑜伽課程與指導',
})
</script>

<template>
  <main class="pt-16 pb-26">
    <div class="container">
      <h2 class="text-7 mb-4 text-center text-brown1">立即預約</h2>
      <ul class="flex items-center justify-center mb-9 gap-4 md:gap-7.5">
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>選擇方案</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>填寫資料</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-white bg-brown1">
          <p>完成預約</p>
        </li>
      </ul>
      <div class="text-brown1">
        <div class="max-w-135 mx-auto mb-6">
          <div class="text-center">
            <Icon name="gg:check-o" class="text-5xl mb-5" />
            <h3 class="mb-8 text-xl">已完成預約，以下是您的預約資訊:</h3>
          </div>

          <div class="px-5 py-4 w-full flex items-center text-white justify-between bg-brown1">
            <p>預約資訊</p>
            <Icon name="iconamoon:arrow-down-2-duotone" class="text-2xl" />
          </div>
          <div class="border border-brown1 p-5 text-brown1">
            <h4 class="mb-4">
              您預約的是 <span class="text-brown2 text-xl">首次體驗課程-基礎</span>
            </h4>
            <p class="mb-2 last:mb-0">上課預約報到日：2021/07/21</p>
            <p class="mb-2 last:mb-0">預約人：Joanne Chen</p>
            <p class="mb-2 last:mb-0">年齡：18 歲</p>
            <p class="mb-2 last:mb-0">性別：女</p>
            <p class="mb-2 last:mb-0">電子信箱：example123@gmail.com</p>
            <p class="mb-2 last:mb-0">手機號碼：0912-345-678</p>
          </div>
        </div>
        <div class="max-w-90 mx-auto">
          <h3 class="text-center text-xl mb-2">上課注意事項</h3>
          <p class="mb-8">
            第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水 .穿著運動服、乾淨室內運動鞋。
            如欲更改體驗時間請提前通知我們喔！
          </p>
          <NuxtLink to="/" class="text-xl text-white bg-brown2 p-2 w-full block text-center rounded"
            >返回首頁</NuxtLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
