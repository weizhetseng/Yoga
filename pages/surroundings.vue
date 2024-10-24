<script setup lang="ts">
useSeoMeta({
  title: '瑜珈空間 | DOYOGA 瑜伽課程與指導',
  description: '',
  keywords: '',
})
</script>

<template>
  <main class="mt-16">
    <div class="container">
      <h2 class="text-7 text-center text-brown1 mb-8">瑜珈空間</h2>
      <div class="flex md:flex-row flex-col gap-7.5 mb-16">
        <div class="w-full md:w-3/5">
          <ul class="flex flex-wrap -mx-4 gap-y-6">
            <li class="w-full px-4">
              <div class="rounded-2xl h-[210px] lg:h-90 overflow-hidden relative">
                <img src="../assets/image/class-1.jpg" alt="" class="w-full h-full object-cover" />
                <div class="absolute w-full bottom-0 p-6 text-white">
                  <h4 class="text-7">A、B 團體課教室</h4>
                  <p>教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛</p>
                </div>
              </div>
            </li>
            <li class="w-full md:w-1/2 px-4">
              <div class="rounded-2xl h-[210px] lg:h-90 overflow-hidden relative">
                <img src="../assets/image/yoga-5.jpg" alt="" class="w-full h-full object-cover" />
                <div class="absolute w-full bottom-0 p-6 text-white">
                  <h4 class="text-7">C、D 個人訓練室</h4>
                  <p>開放時間：每週一至週五 09:00~17:00</p>
                </div>
              </div>
            </li>
            <li class="w-full md:w-1/2 px-4">
              <div class="rounded-2xl h-[210px] lg:h-90 overflow-hidden relative">
                <img src="../assets/image/class-2.jpg" alt="" class="w-full h-full object-cover" />
                <div class="absolute w-full bottom-0 p-6 text-white">
                  <h4 class="text-7">淋浴間</h4>
                  <p>開放時間：每週一至週日 09:00~21:30</p>
                </div>
              </div>
            </li>
            <li class="w-full md:w-1/2 px-4">
              <div class="rounded-2xl h-[210px] lg:h-90 overflow-hidden relative">
                <img src="../assets/image/yoga-7.jpg" alt="" class="w-full h-full object-cover" />
                <div class="absolute w-full bottom-0 p-6 text-white">
                  <h4 class="text-7">器材出租</h4>
                  <p>有租借需求請至櫃檯登記</p>
                </div>
              </div>
            </li>
            <li class="w-full md:w-1/2 px-4">
              <div class="rounded-2xl h-[210px] lg:h-90 overflow-hidden relative">
                <img src="../assets/image/class-3.jpg" alt="" class="w-full h-full object-cover" />
                <div class="absolute w-full bottom-0 p-6 text-white">
                  <h4 class="text-7">交誼廳</h4>
                  <p>開放時間：每週一至週五 09:00~21:30</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-2/5">
          <div class="p-8 text-brown1 bg-brown3 rounded-2xl">
            <h3 class="text-xl mb-4">DOYOGA 提供：</h3>
            <p class="mb-1">四間教室：A、B 團體課教室、C、D 個人訓練室。</p>
            <p class="mb-1">瑜珈墊、輔具：每次課後會進行殺菌清潔，乾淨免擔心。</p>
            <p class="mb-1">男女置物櫃、淋浴間：分別設置在館內 A、B 區。</p>
            <p class="mb-3">舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。</p>
            <NuxtLink to="/reservation" class="flex items-center gap-2">
              立即預約<Icon class="text-xl" name="mingcute:arrow-right-line" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-10 pb-14 bg-brown3">
      <div class="container">
        <h2 class="text-7 text-center text-brown1 mb-8">課程推薦</h2>
        <ul class="flex overflow-auto gap-7.5 text-brown1">
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-8.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-9.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-10.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-11.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-12.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-13.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-14.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
          <li class="flex-shrink-0">
            <div>
              <img
                src="../assets/image/yoga-15.jpg"
                alt=""
                class="rounded-2xl h-[195px] w-[225px] object-cover mb-2"
              />
              <h4 class="text-xl">基礎 Basic</h4>
              <p>授課老師：Carol Tang</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
