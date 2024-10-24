<script setup lang="ts">
useSeoMeta({
  title: ' DOYOGA 瑜伽課程與指導',
  description:
    '聯絡 DOYOGA，了解更多關於我們的瑜伽課程、私人教學和最新活動資訊。我們的專業瑜伽老師隨時為您解答各種問題。',
  keywords: '瑜伽, DOYOGA, 瑜伽課程, 瑜伽教學, 私人瑜伽, 瑜伽空間, 聯絡我們',
})
</script>

<template>
  <main class="mt-16 mb-26">
    <div class="container">
      <p class="text-6xl font-bold text-brown1 text-center mb-8">404</p>
      <p class="mb-8 max-w-80 mx-auto text-center text-brown2">
        看起來你找的頁面不存在！有什麼我可以幫你的嗎？
      </p>
      <div class="flex items-center gap-5 justify-center">
        <NuxtLink
          to="/"
          class="text-xl px-3 py-2 bg-brown2 text-white rounded hover:bg-brown3 hover:text-brown1"
          >返回首頁</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-xl px-3 py-2 bg-brown3 text-brown1 rounded hover:text-white hover:bg-brown2"
          >聯絡我們</NuxtLink
        >
      </div>
    </div>
  </main>
</template>
