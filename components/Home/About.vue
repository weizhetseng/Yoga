<script setup lang="ts">
import yoga1 from '../../assets/image/yoga-1.jpeg'
import yoga2 from '../../assets/image/yoga-2.jpeg'
import yoga3 from '../../assets/image/yoga-3.jpeg'

const aboutLIst = [
  {
    Id: 1,
    imgUrl: yoga1,
    title: '整體健身',
    content: '每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。',
  },
  {
    Id: 2,
    imgUrl: yoga2,
    title: '減壓放鬆',
    content: '調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。',
  },
  {
    Id: 3,
    imgUrl: yoga3,
    title: '局部雕塑',
    content: '幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態',
  },
]
</script>

<template>
  <div class="pt-10 pb-14">
    <div class="container">
      <h3 class="text-brown1 text-[28px] text-center mb-1">感受身心，活在當下</h3>
      <p class="text-brown2 text-xl text-center mb-8">DOYOGA 可以帶給你...</p>
      <ul class="flex flex-col md:flex-row gap-7.5">
        <li class="w-full md:w-1/3 h-full" v-for="item in aboutLIst" :key="item.Id">
          <div
            class="rounded-2xl overflow-hidden p-6 text-white h-[420px] md:h-64 lg:h-[420px] relative flex flex-col justify-end items-start"
          >
            <img
              :src="item.imgUrl"
              alt=""
              class="absolute w-full h-full top-0 left-0 object-cover -z-10"
            />
            <h4 class="mb-1 text-xl">{{ item.title }}</h4>
            <p>
              {{ item.content }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
