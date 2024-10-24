<script setup lang="ts">
import { ref } from 'vue'
import teacher1 from '../../assets/image/teacher-1.png'
import teacher2 from '../../assets/image/teacher-2.png'
import teacher3 from '../../assets/image/teacher-3.png'

const activeIndex = ref(1)

const teachList = [
  {
    Id: 1,
    imgURL: teacher1,
    name: 'Carol Tang',
    years: 10,
    content: '瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。',
  },
  {
    Id: 2,
    imgURL: teacher2,
    name: 'Kanae',
    years: 10,
    content: '瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。',
  },
  {
    Id: 3,
    imgURL: teacher3,
    name: 'Asa Ifrit',
    years: 10,
    content: '瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。',
  },
]
</script>

<template>
  <div class="py-14 bg-brown3">
    <div class="container flex items-center gap-7.5">
      <div class="hidden lg:block w-1/2">
        <img src="~/assets/image/yoga-4.jpeg" alt="" class="rounded-2xl" />
      </div>
      <div class="w-full lg:w-1/2">
        <h3 class="text-7 text-brown1 mb-1">頂尖師資、專業教學</h3>
        <p class="text-xl text-brown2 mb-8">
          強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
        </p>
        <ul class="lg:-ml-20" @mouseleave="activeIndex = teachList[0].Id">
          <li
            class="mb-7.5 group"
            @mouseenter="activeIndex = item.Id"
            v-for="item in teachList"
            :key="item.Id"
          >
            <div
              class="bg-white rounded-2xl flex gap-5 items-center origin-right duration-300 md:group-hover:px-12 md:group-hover:py-10 ml-auto md:group-hover:w-full px-4 py-4 w-full"
              :class="
                activeIndex === item.Id
                  ? 'md:px-12 md:py-10'
                  : 'md:px-8 md:py-6 md:w-11/12 lg:w-4/5'
              "
            >
              <img
                :src="item.imgURL"
                alt=""
                class="md:group-hover:w-24 md:group-hover:h-24 rounded-full"
                :class="activeIndex === item.Id ? 'md:w-24 md:h-24' : ''"
              />
              <div class="text-textGray">
                <p class="text-xl">{{ item.name }} 老師</p>
                <p>教學經歷 {{ item.years }} 年</p>
                <p
                  class="md:group-hover:block"
                  :class="activeIndex === item.Id ? 'block' : 'hidden'"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
