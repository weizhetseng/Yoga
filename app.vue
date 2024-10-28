<script setup lang="ts">
useSeoMeta({
  title: 'DOYOGA 瑜珈課程與指導',
  description:
    '聯絡 DOYOGA，了解更多關於我們的瑜珈課程、私人教學和最新活動資訊。我們的專業瑜珈老師隨時為您解答各種問題。',
  keywords: '瑜珈, DOYOGA, 瑜珈課程, 瑜珈教學, 私人瑜珈, 瑜珈空間, 聯絡我們',
  ogTitle: 'DOYOGA 瑜珈課程與指導',
  ogDescription:
    '聯絡 DOYOGA，了解更多關於我們的瑜珈課程、私人教學和最新活動資訊。我們的專業瑜珈老師隨時為您解答各種問題。',
  ogImage: '/header.jpeg',
  ogUrl: 'https://yoga-ochre.vercel.app/',
  twitterTitle: 'DOYOGA 瑜珈課程與指導',
  twitterDescription:
    '聯絡 DOYOGA，了解更多關於我們的瑜珈課程、私人教學和最新活動資訊。我們的專業瑜珈老師隨時為您解答各種問題。',
  twitterImage: '/header.jpeg',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'zh-TW',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <AppSocial />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
