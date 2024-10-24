<script setup lang="ts">
useSeoMeta({
  title: '聯絡我們 | DOYOGA 瑜伽課程與指導',
  description:
    '聯絡我們以了解更多關於 DOYOGA 提供的瑜伽課程、私人教學和活動資訊。我們的專業瑜伽老師隨時為您解答。',
  keywords: '瑜伽, 聯絡我們, DOYOGA, 瑜伽課程, 瑜伽教學, 私人瑜伽指導',
})
</script>

<template>
  <main class="mt-16 mb-26">
    <div class="container">
      <h2 class="mb-8 text-7 text-brown1 text-center">聯絡我們</h2>
      <div class="flex flex-col lg:flex-row gap-7.5">
        <div class="w-full lg:w-3/5">
          <div class="mb-6 video-container relative pb-[56.25%] pt-7.5 h-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29462.41587606851!2d120.31779099999999!3d22.62386845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e049783205c61%3A0xebaf934b04f62525!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A!5e0!3m2!1szh-TW!2stw!4v1729738210350!5m2!1szh-TW!2stw"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
              class="rounded-2xl absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div class="text-brown1 max-w-90">
            <h3 class="mb-2 text-2xl">DOYOGA 教室位置</h3>
            <p class="mb-2">高雄市苓雅區北信街 23 號 2 樓</p>
            <p>如何前往：</p>
            <ul>
              <li class="mb-6 last:mb-0">
                1. 搭乘捷運：紅線到正義站 3 號出口，延正義路方向至北信街交叉口即可。
              </li>
              <li class="mb-6 last:mb-0">
                2. 搭乘公車：搭這些公車都可以抵達正義站 24B 25 33 50 76 77 77區 100
              </li>
              <li class="mb-6 last:mb-0">3. 開車前往北信街 32 號，教室旁有專屬停車場可以使用。</li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-2/5">
          <form action="" class="text-brown1 p-8 bg-brown3 rounded-2xl h-full flex flex-col">
            <h4 class="mb-6 text-xl">意見回饋&問題詢問</h4>
            <div class="flex flex-col mb-4 last:mb-0">
              <label for="" class="mb-2">姓名</label>
              <input
                type="text"
                placeholder="請輸入您的姓名"
                class="border px-3 py-1.5 rounded placeholder:text-brown2"
              />
            </div>
            <div class="flex flex-col mb-4 last:mb-0">
              <label for="" class="mb-2">電子信箱</label>
              <input
                type="text"
                placeholder="email@example.com"
                class="border px-3 py-1.5 rounded placeholder:text-brown2"
              />
            </div>
            <div class="flex flex-col mb-4 last:mb-0">
              <label for="" class="mb-2">手機號碼</label>
              <input
                type="text"
                placeholder="0912-345-678"
                class="border px-3 py-1.5 rounded placeholder:text-brown2"
              />
            </div>
            <div class="flex flex-col mb-4 last:mb-0 flex-1">
              <label for="" class="mb-2">意見回饋</label>
              <textarea
                name=""
                id=""
                class="border px-3 py-1.5 h-full resize-none rounded placeholder:text-brown2"
              ></textarea>
            </div>
            <div class="flex justify-end mb-4 last:mb-0">
              <button type="submit" class="px-3 py-1.5 bg-brown2 text-white rounded">送出</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
