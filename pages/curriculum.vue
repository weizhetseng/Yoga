<script setup lang="ts">
useSeoMeta({
  title: '本月課表 | DOYOGA 瑜伽課程與指導',
})
</script>

<template>
  <main class="mt-16 mb-26">
    <div class="container">
      <h2 class="text-center text-brown1 mb-8 text-7">本月課表</h2>
      <div class="mb-8 pt-12 px-10 pb-10 rounded-2xl bg-brown2 whitespace-nowrap overflow-auto">
        <p class="text-xl text-white">2021 07 月</p>
        <table class="w-full text-brown2 bg-white">
          <thead>
            <tr>
              <th class="px-1 py-2 text-left border-b-2 border-brown2 border-r-2">時間</th>
              <th class="px-1 py-2 border-b-2 border-brown2">星期一</th>
              <th class="px-1 py-2 bg-brown3 border-b-2 border-brown2">星期二</th>
              <th class="px-1 py-2 border-b-2 border-brown2">星期三</th>
              <th class="px-1 py-2 bg-brown3 border-b-2 border-brown2">星期四</th>
              <th class="px-1 py-2 border-b-2 border-brown2">星期五</th>
              <th class="px-1 py-2 bg-brown3 border-b-2 border-brown2">星期六</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">0900-1000</td>
              <td class="p-2 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 bg-brown3 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 border-b border-brown2"></td>
              <td class="p-2 bg-brown3 border-b border-brown2"></td>
              <td class="p-2 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 bg-brown3 border-b border-brown2">基礎 Basic</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1000-1100</td>
              <td class="p-2 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 bg-brown3 border-b border-brown2">哈達 Hatha</td>
              <td class="p-2 border-b border-brown2">寰宇 Universal</td>
              <td class="p-2 bg-brown3 border-b border-brown2">哈達 Hatha</td>
              <td class="p-2 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 bg-brown3 border-b border-brown2">雙人飛行</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1100-1200</td>
              <td class="p-2 border-b border-brown2">寰宇 Universal</td>
              <td class="p-2 bg-brown3 border-b border-brown2">陰陽 Yin Yang</td>
              <td class="p-2 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 bg-brown3 border-b border-brown2">寰宇 Universal</td>
              <td class="p-2 border-b border-brown2"></td>
              <td class="p-2 bg-brown3 border-b border-brown2">艾揚格 Iyengar</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1200-1400</td>
              <td colspan="6" class="p-2 text-center border-b border-brown2">休息</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1400-1500</td>
              <td class="p-2 border-b border-brown2">雙人飛行</td>
              <td class="p-2 bg-brown3 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 border-b border-brown2">雙人飛行</td>
              <td class="p-2 bg-brown3 border-b border-brown2">陰陽 Yin Yang</td>
              <td class="p-2 border-b border-brown2">雙人飛行</td>
              <td class="p-2 bg-brown3 border-b border-brown2">基礎 Basic</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1500-1600</td>
              <td class="p-2 border-b border-brown2">陰陽 Yin Yang</td>
              <td class="p-2 bg-brown3 border-b border-brown2">陰陽 Yin Yang</td>
              <td class="p-2 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 bg-brown3 border-b border-brown2">基礎 Basic</td>
              <td class="p-2 border-b border-brown2">哈達 Hatha</td>
              <td class="p-2 bg-brown3 border-b border-brown2">香氛瑜珈</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1600-1700</td>
              <td class="p-2 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 bg-brown3 border-b border-brown2"></td>
              <td class="p-2 border-b border-brown2">哈達 Hatha</td>
              <td class="p-2 bg-brown3 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 border-b border-brown2">寰宇 Universal</td>
              <td class="p-2 bg-brown3 border-b border-brown2">陰陽 Yin Yang</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1700-1800</td>
              <td class="p-2 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 bg-brown3 border-b border-brown2"></td>
              <td class="p-2 border-b border-brown2">哈達 Hatha</td>
              <td class="p-2 bg-brown3 border-b border-brown2">艾揚格 Iyengar</td>
              <td class="p-2 border-b border-brown2">寰宇 Universal</td>
              <td class="p-2 bg-brown3 border-b border-brown2">哈達 Hatha</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-b border-brown2 border-r-2">1800-2000</td>
              <td colspan="6" class="p-2 text-center border-b border-brown2">休息</td>
            </tr>
            <tr>
              <td class="px-1 py-2 border-brown2 border-r-2">2000-2100</td>
              <td class="p-2"></td>
              <td class="p-2 bg-brown3"></td>
              <td class="p-2">香氛瑜珈</td>
              <td class="p-2 bg-brown3">艾揚格 Iyengar</td>
              <td class="p-2">香氛瑜珈</td>
              <td class="p-2 bg-brown3">雙人飛行</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="text-center text-brown1 mb-8 text-7">上課須知</h3>
      <ul class="max-w-160 mx-auto">
        <li
          class="flex gap-2 md:gap-6 items-center mb-6 last:mb-0 group md:odd:-translate-x-10 md:even:translate-x-10"
        >
          <p class="text-3xl text-brown1 font-bold">1.</p>
          <p
            class="px-6 py-4 border border-brown2 group-even:bg-brown2 flex-1 w-full group-even:text-white group-odd:text-brown1 rounded-2xl"
          >
            空中瑜珈、香氛開放 2 天前電話預約上課。
          </p>
        </li>
        <li
          class="flex gap-2 md:gap-6 items-center mb-6 last:mb-0 group md:odd:-translate-x-10 md:even:translate-x-10"
        >
          <p class="text-3xl text-brown1 font-bold">2.</p>
          <p
            class="px-6 py-4 border border-brown2 group-even:bg-brown2 flex-1 w-full group-even:text-white group-odd:text-brown1 rounded-2xl"
          >
            如果有特殊體質、特殊狀況，請主動告知該堂教師。
          </p>
        </li>
        <li
          class="flex gap-2 md:gap-6 items-center mb-6 last:mb-0 group md:odd:-translate-x-10 md:even:translate-x-10"
        >
          <p class="text-3xl text-brown1 font-bold">3.</p>
          <p
            class="px-6 py-4 border border-brown2 group-even:bg-brown2 flex-1 w-full group-even:text-white group-odd:text-brown1 rounded-2xl"
          >
            取消預約或時間異動請於預約日前一天晚間 21:00 前告知。
          </p>
        </li>
        <li
          class="flex gap-2 md:gap-6 items-center mb-6 last:mb-0 group md:odd:-translate-x-10 md:even:translate-x-10"
        >
          <p class="text-3xl text-brown1 font-bold">4.</p>
          <p
            class="px-6 py-4 border border-brown2 group-even:bg-brown2 flex-1 w-full group-even:text-white group-odd:text-brown1 rounded-2xl"
          >
            運動過程中若感到任何不適，請馬上停止且與老師商量討論。
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>
