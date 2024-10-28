<script setup lang="ts">
type About = {
  _id: string
  imgURL: string
  title: string
  content: string
}

const { data: aboutList } = await useFetch<About[]>('/api/about')
</script>

<template>
  <div class="pt-10 pb-14">
    <div class="container">
      <h3 class="text-brown1 text-[28px] text-center mb-1">感受身心，活在當下</h3>
      <p class="text-brown2 text-xl text-center mb-8">DOYOGA 可以帶給你...</p>
      <ul class="flex flex-col md:flex-row gap-7.5">
        <li class="w-full md:w-1/3 h-full" v-for="item in aboutList" :key="item._id">
          <div
            class="rounded-2xl overflow-hidden p-6 text-white h-[420px] md:h-64 lg:h-[420px] relative flex flex-col justify-end items-start"
          >
            <img
              :src="item.imgURL"
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
