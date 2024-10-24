<script setup lang="ts">
import yoga11 from '../assets/image/yoga-11.jpg'
import yoga12 from '../assets/image/yoga-12.jpg'
import yoga13 from '../assets/image/yoga-13.jpg'
const planList = [
  {
    Id: 1,
    imgURL: yoga11,
    name: '首次體驗',
    price: 'NT $450 / 次',
    content: '分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。',
  },
  {
    Id: 2,
    imgURL: yoga12,
    name: '短期體驗',
    price: 'NT $1800 / 月',
    content: '分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。',
  },
  {
    Id: 3,
    imgURL: yoga13,
    name: '長期體驗',
    price: 'NT $5600 / 季',
    content: '分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。',
  },
]
</script>

<template>
  <div class="pt-10 pb-14">
    <div class="container">
      <h3 class="text-7 text-brown1 mb-1 text-center">方案選擇</h3>
      <p class="text-xl text-brown2 text-center mb-8">DOYOGA 可以帶給你...</p>
      <ul class="flex flex-col lg:flex-row gap-7.5">
        <li class="w-full lg:w-1/3" v-for="item in planList" :key="item.Id">
          <NuxtLink
            to="/reservation"
            class="rounded-3xl border border-brown2 overflow-hidden flex flex-col md:flex-row lg:flex-col group"
          >
            <img :src="item.imgURL" alt="" class="w-auto md:w-1/2 lg:w-auto h-66 object-cover" />
            <div class="p-6 w-auto md:w-1/2 lg:w-auto">
              <h4 class="mb-1 text-xl text-brown1 text-center md:text-left lg:text-center">
                {{ item.name }}
              </h4>
              <p class="mb-2 text-xl text-brown2 text-center md:text-left lg:text-center">
                {{ item.price }}
              </p>
              <p class="mb-10 text-brown1">
                {{ item.content }}
              </p>
              <div
                class="bg-brown2 text-white block p-2 text-center rounded-md text-xl group-hover:bg-brown1 cursor-pointer"
              >
                選擇課程
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
