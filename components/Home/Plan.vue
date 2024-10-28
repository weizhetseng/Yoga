<script setup lang="ts">
const { $gsap } = useNuxtApp()

type Plan = {
  _id: string
  imgURL: string
  title: string
  price: string
  content: string
}
const { data: planList } = await useFetch<Plan[]>('/api/plan')

onMounted(() => {
  const listItems = document.querySelectorAll('.plan li')

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.plan',
      markers: true,
      start: 'top 30%',
      end: 'top 1%',
      toggleActions: 'play complete play reset',
    },
  })

  listItems.forEach((item, index) => {
    tl.from(
      item,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      },
      index * 0.2
    )
  })
})
</script>

<template>
  <div class="plan pt-10 pb-14">
    <div class="container">
      <h3 class="text-7 text-brown1 mb-1 text-center">方案選擇</h3>
      <p class="text-xl text-brown2 text-center mb-8">DOYOGA 可以帶給你...</p>
      <ul class="flex flex-col lg:flex-row gap-7.5">
        <li class="w-full lg:w-1/3" v-for="item in planList" :key="item._id">
          <NuxtLink
            to="/reservation"
            class="rounded-3xl border border-brown2 overflow-hidden flex flex-col md:flex-row lg:flex-col group"
          >
            <img :src="item.imgURL" alt="" class="w-auto md:w-1/2 lg:w-auto h-66 object-cover" />
            <div class="p-6 w-auto md:w-1/2 lg:w-auto">
              <h4 class="mb-1 text-xl text-brown1 text-center md:text-left lg:text-center">
                {{ item.title }}
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
