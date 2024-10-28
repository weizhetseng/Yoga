<script setup lang="ts">
const activeIndex = ref('')

type Teacher = {
  _id: string
  imgURL: string
  name: string
  years: number
  content: string
}

const { data: teacherList } = await useFetch<Teacher[]>('/api/teacher')
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
        <ul class="lg:-ml-20" @mouseleave="activeIndex = teacherList?.[0]?._id">
          <li
            class="mb-7.5 group"
            @mouseenter="activeIndex = item._id"
            v-for="item in teacherList"
            :key="item._id"
          >
            <div
              class="bg-white rounded-2xl flex gap-5 items-center origin-right duration-300 md:group-hover:px-12 md:group-hover:py-10 ml-auto md:group-hover:w-full px-4 py-4 w-full"
              :class="
                activeIndex === item._id
                  ? 'md:px-12 md:py-10'
                  : 'md:px-8 md:py-6 md:w-11/12 lg:w-4/5'
              "
            >
              <img
                :src="item.imgURL"
                alt=""
                class="w-16 h-16 md:group-hover:w-24 md:group-hover:h-24 rounded-full"
                :class="activeIndex === item._id ? 'md:w-24 md:h-24' : ''"
              />
              <div class="text-textGray">
                <p class="text-xl">{{ item.name }} 老師</p>
                <p>教學經歷 {{ item.years }} 年</p>
                <p
                  class="md:group-hover:block"
                  :class="activeIndex === item._id ? 'block' : 'hidden'"
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
