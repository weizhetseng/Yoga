<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { type SwiperContainer } from 'swiper/element'
import yoga11 from '../assets/image/yoga-11.jpg'
import yoga12 from '../assets/image/yoga-12.jpg'
import yoga13 from '../assets/image/yoga-13.jpg'

register()

const activeIndex = ref(0)

const filterLevel = computed(() => {
  return planList.find((item) => item.Id === activeIndex.value)
})

const selectClass = ref({
  mainClass: 0,
  level: 0,
})

const selectClassName = computed(() => {
  const mainClass = planList.find((item) => item.Id === selectClass.value.mainClass)

  const levelName = mainClass?.level.find((item) => item.Id === selectClass.value.level)?.title

  if (!mainClass?.name) {
    return ''
  }

  return `${mainClass.name}課程-${levelName || ''}`
})

const planList = [
  {
    Id: 1,
    imgURL: yoga11,
    name: '首次體驗',
    price: 'NT $450 / 次',
    content: '分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。',
    level: [
      {
        Id: 1,
        title: '基礎',
        eTitle: 'Basic',
        subTitle: '基礎課程',
        time: '60',
        content: ['入體位法動作解說', '瑜珈基礎動作、順位', '適合任何階段練習者'],
      },
      {
        Id: 2,
        title: '中階',
        eTitle: 'Intermediate',
        subTitle: '艾揚格、哈達、寰宇',
        time: '60',
        content: ['刺激身體七個層次為核心', '結合流暢體位法練習、呼吸、觀想', '適合半年以上練習者'],
      },
      {
        Id: 3,
        title: '高階',
        eTitle: 'Advanced',
        subTitle: '阿斯坦加、陰陽',
        time: '60',
        content: ['充分打開身體每個部位', '顯著提升力量與柔軟度', '適合一年以上練習者'],
      },
    ],
  },
  {
    Id: 2,
    imgURL: yoga12,
    name: '短期體驗',
    price: 'NT $1800 / 月',
    content: '分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。',
    level: [
      {
        Id: 1,
        title: '基礎',
        eTitle: 'Basic',
        subTitle: '基礎課程',
        time: '60',
        content: ['入體位法動作解說', '瑜珈基礎動作、順位', '適合任何階段練習者'],
      },
      {
        Id: 2,
        title: '中階',
        eTitle: 'Intermediate',
        subTitle: '艾揚格、哈達、寰宇',
        time: '60',
        content: ['刺激身體七個層次為核心', '結合流暢體位法練習、呼吸、觀想', '適合半年以上練習者'],
      },
      {
        Id: 3,
        title: '高階',
        eTitle: 'Advanced',
        subTitle: '阿斯坦加、陰陽',
        time: '60',
        content: ['充分打開身體每個部位', '顯著提升力量與柔軟度', '適合一年以上練習者'],
      },
    ],
  },
  {
    Id: 3,
    imgURL: yoga13,
    name: '長期體驗',
    price: 'NT $5600 / 季',
    content: '分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。',
    level: [
      {
        Id: 1,
        title: '基礎',
        eTitle: 'Basic',
        subTitle: '基礎課程',
        time: '60',
        content: ['入體位法動作解說', '瑜珈基礎動作、順位', '適合任何階段練習者'],
      },
      {
        Id: 2,
        title: '中階',
        eTitle: 'Intermediate',
        subTitle: '艾揚格、哈達、寰宇',
        time: '60',
        content: ['刺激身體七個層次為核心', '結合流暢體位法練習、呼吸、觀想', '適合半年以上練習者'],
      },
      {
        Id: 3,
        title: '高階',
        eTitle: 'Advanced',
        subTitle: '阿斯坦加、陰陽',
        time: '60',
        content: ['充分打開身體每個部位', '顯著提升力量與柔軟度', '適合一年以上練習者'],
      },
    ],
  },
]

const swiperRef = ref<SwiperContainer | null>(null)

onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.swiper.on('slideChange', () => {
      activeIndex.value = 0
    })
  }
})
</script>

<template>
  <main class="pt-16 pb-26">
    <div class="container">
      <h2 class="text-7 mb-4 text-center text-brown1">立即預約</h2>
      <ul class="flex items-center justify-center mb-8 gap-4 md:gap-7.5">
        <li class="p-5 md:px-12 py-3 rounded-2xl text-white bg-brown1">
          <p>選擇方案</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>填寫資料</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>完成預約</p>
        </li>
      </ul>
      <ul class="hidden lg:flex gap-7.5">
        <li
          class="flex flex-col items-center w-1/3 flex-shrink"
          v-for="item in planList"
          :key="item.Id"
        >
          <div
            class="rounded-3xl border-brown2 overflow-hidden flex flex-col md:flex-row lg:flex-col group cursor-pointer lg:h-full"
            :class="selectClass.mainClass === item.Id ? 'border-4' : 'border'"
            @click="
              ;(activeIndex = item.Id), (selectClass.mainClass = item.Id), (selectClass.level = 0)
            "
          >
            <img :src="item.imgURL" alt="" class="w-auto md:w-1/2 lg:w-auto h-66 object-cover" />
            <div class="p-6 w-auto md:w-1/2 lg:w-auto flex-1 flex flex-col">
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
                class="bg-brown2 text-white block p-2 text-center rounded-md text-xl group-hover:bg-brown1 cursor-pointer mt-auto"
              >
                選擇課程
              </div>
            </div>
          </div>

          <div class="w-10 h-10 my-4 flex items-center justify-center">
            <Icon
              name="icon-park-solid:down-one"
              class="text-brown1 text-2xl"
              v-show="activeIndex === item.Id"
            />
          </div>
        </li>
      </ul>

      <ClientOnly>
        <div class="relative">
          <swiper-container
            ref="swiperRef"
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{
              nextEl: '.next',
              prevEl: '.prev',
            }"
            class="block lg:hidden"
          >
            <swiper-slide
              v-for="item in planList"
              :key="item.Id"
              class="flex items-center flex-col"
            >
              <div
                class="rounded-3xl border-brown2 overflow-hidden flex flex-col md:flex-row lg:flex-col group cursor-pointer lg:h-full"
                :class="selectClass.mainClass === item.Id ? 'border-4' : 'border'"
                @click="
                  ;(activeIndex = item.Id),
                    (selectClass.mainClass = item.Id),
                    (selectClass.level = 0)
                "
              >
                <img
                  :src="item.imgURL"
                  alt=""
                  class="w-auto md:w-1/2 lg:w-auto h-66 object-cover"
                />
                <div class="p-6 w-auto md:w-1/2 lg:w-auto flex-1 flex flex-col">
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
                    class="bg-brown2 text-white block p-2 text-center rounded-md text-xl group-hover:bg-brown1 cursor-pointer mt-auto"
                  >
                    選擇課程
                  </div>
                </div>
              </div>

              <div class="w-10 h-10 my-4 flex items-center justify-center">
                <Icon
                  name="icon-park-solid:down-one"
                  class="text-brown1 text-2xl"
                  v-show="activeIndex === item.Id"
                />
              </div>
            </swiper-slide>
          </swiper-container>
          <div
            class="absolute bottom-8 w-full px-5 z-50 flex lg:hidden items-center justify-between"
          >
            <button type="button" class="prev text-3xl text-brown1">
              <Icon name="mingcute:arrow-left-line" />
            </button>
            <button type="button" class="next text-3xl text-brown1">
              <Icon name="mingcute:arrow-right-line" />
            </button>
          </div>
        </div>
      </ClientOnly>

      <div v-show="activeIndex !== 0">
        <div class="bg-brown1 pt-8 md:pt-10 px-4 md:px-10 pb-12 md:pb-16 mb-10">
          <h4 class="text-7 mb-8 text-white text-center">選擇課程階級</h4>
          <ul class="flex gap-5 md:flex-row flex-col md:overflow-auto">
            <li
              class="w-full md:w-1/2 flex-shrink-0 lg:flex-shrink lg:w-1/3 bg-brown2 p-6 rounded-2xl text-white border-4 hover:border-white group cursor-pointer shadow-main md:m-2.5"
              :class="selectClass.level === item.Id ? 'border-white' : 'border-transparent'"
              v-for="item in filterLevel?.level"
              :key="item.title"
              @click="selectClass.level = item.Id"
            >
              <div class="flex justify-between items-start gap-1.5 mb-5">
                <div>
                  <h5 class="text-7">{{ item.title }}</h5>
                  <p class="flex items-center gap-2">
                    基礎課程
                    <span class="text-sm px-4 py-2 bg-brown1 rounded-full"
                      >{{ item.time }} min</span
                    >
                  </p>
                </div>
                <Icon
                  name="gg:check-o"
                  class="text-4xl group-hover:opacity-100"
                  :class="selectClass.level === item.Id ? 'opacity-100' : 'opacity-30'"
                />
              </div>
              <ul>
                <li
                  class="mb-1 last:mb-0 list-disc list-outside ml-4"
                  v-for="list in item.content"
                  :key="list"
                >
                  {{ list }}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="text-center text-brown1 mb-10">
          <p class="mb-1">您選擇的是</p>
          <p class="text-xl underline underline-offset-4">
            {{ selectClassName }}
          </p>
        </div>
      </div>
      <div class="text-brown1 flex flex-col items-center">
        <h3 class="mb-4 text-7 text-center">預約須知</h3>
        <ul class="max-w-[445px] mb-8">
          <li class="mb-1 last:mb-0">1. 如果有特殊體質、特殊狀況，請主動告知。</li>
          <li class="mb-1 last:mb-0">
            2. 取消預約或時間異動請於預約日前一天晚間 21:00
            前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。
          </li>
          <li class="mb-1 last:mb-0">
            3. 為維護上課品質，請遵守 DOYOGA 各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。
          </li>
          <li class="mb-1 last:mb-0">
            4. DOYOGA
            保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。
          </li>
        </ul>
        <NuxtLink
          to="/reserveData"
          class="w-[350px] text-center bg-brown2 p-2 rounded text-xl text-white"
          v-if="selectClass.level && selectClass.mainClass"
          >繼續預約</NuxtLink
        >
      </div>
    </div>
  </main>
</template>
