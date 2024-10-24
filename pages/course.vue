<script setup lang="ts">
const isModal = ref(false)
</script>

<template>
  <main class="mt-16">
    <div class="container pb-16">
      <h2 class="text-7 text-brown1 mb-8 text-center">課程介紹</h2>
      <div class="flex flex-col md:flex-row items-center gap-7.5">
        <div class="w-full md:w-1/2 lg:w-3/5">
          <img
            src="~/assets/image/yoga-4.jpeg"
            alt=""
            class="rounded-2xl w-full object-cover max-h-56 md:max-h-80"
          />
        </div>
        <div class="w-full md:w-1/2 lg:w-2/5">
          <h3 class="text-7 text-brown1">本月限定課程 - 空中瑜珈</h3>
          <p class="flex items-center gap-2 mb-4 text-brown2">
            授課老師：Carol Tang
            <span class="text-white px-4 py-1.5 rounded-full bg-brown1 text-sm">60 min</span>
          </p>
          <p class="text-brown1 mb-4">
            使用掛布懸掛在半空，進行哈達瑜珈體位法練習<br />
            藉由地心引力的重力原理<br />
            鍛鍊核心肌群，舒緩脊椎壓力<br />
            訓練身體協調性，深層放鬆身體<br />
            課堂裡老師會視同學狀況安排教導倒立動作<br />
            對於不敢嘗試倒立的同學來說<br />
            藉由掛布的支持與保護<br />
            加上老師細心指導，讓同學能更快掌握
          </p>
          <NuxtLink to="/" class="px-4 py-2 rounded text-xl text-white bg-brown2"
            >立即預約</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="bg-brown2">
      <div class="container flex gap-2 py-5">
        <div
          class="flex rounded overflow-hidden w-full flex-1 max-w-60 md:max-w-[270px] lg:max-w-90"
        >
          <input
            type="text"
            placeholder="請輸入要搜尋的課程"
            class="px-3 py-1.5 placeholder:text-brown1 w-full flex-1"
          />
          <button type="button" class="text-white px-3 py-1.5 bg-brown1">搜尋</button>
        </div>
        <select name="" id="" class="px-3 py-1.5 rounded">
          <option value="">全部課程</option>
        </select>
      </div>
    </div>

    <div class="container flex flex-col lg:flex-row gap-7.5 py-14">
      <div class="w-full lg:w-4/5">
        <ul class="flex flex-wrap -mx-4 gap-y-7.5">
          <li class="w-full md:w-3/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-5.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-2/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-6.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-2/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-7.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-3/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-8.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-3/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-9.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-2/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-10.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-2/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-11.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
          <li class="w-full md:w-3/5 px-4">
            <div class="h-48 relative cursor-pointer" @click="isModal = true">
              <div
                class="px-4 py-1.5 rounded-full text-white bg-brown2 absolute left-6 top-0 -translate-y-1/2"
              >
                60 min
              </div>
              <img
                src="../assets/image/yoga-12.jpg"
                alt=""
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h4 class="text-7">基礎 Basic</h4>
                <p>授課老師：Carol Tang</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full max-w-90 mx-auto lg:w-1/5 text-brown2">
        <h4 class="mb-2 text-xl">DOYOGA 上課須知：</h4>
        <p class="mb-1 last:mb-0">請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。</p>
        <p class="mb-1 last:mb-0">
          運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。
        </p>
        <p class="mb-1 last:mb-0">
          運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。
        </p>
        <p class="mb-1 last:mb-0">
          運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。
        </p>
        <p class="mb-1 last:mb-0">
          運動過程中若感到任何不適，請馬上停止且與老師商量討論。 若懷孕或特殊疾病請先告知。
        </p>
      </div>
    </div>

    <div class="border-t-2 border-brown1 pb-28">
      <div class="container">
        <h2 class="text-7 text-brown1 my-8 text-center">師資介紹</h2>
        <ul class="flex flex-col md:flex-row md:overflow-y-auto gap-16 md:gap-7.5 pt-12">
          <li
            class="w-full md:w-[45%] lg:w-[29%] flex-shrink-0 odd:bg-brown2 even:bg-brown1 text-white px-6 pt-14 pb-6 rounded-2xl relative"
          >
            <div>
              <img
                src="../assets/image/teacher-1.png"
                alt=""
                class="w-24 h-24 rounded-full border-2 border-brown1 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
              />
              <h4 class="text-xl text-center mb-1">Carol Tang 老師</h4>
              <p class="mb-4 text-center">教學經歷 10 年</p>
              <p class="mb-4">
                “因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。
                我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能，並將瑜珈自然的融入自己的生活中。”
              </p>
              <ul>
                <li class="mb-1 last:mb-0">協會認證艾揚格瑜珈老師</li>
                <li class="mb-1 last:mb-0">2010 年完成四年的艾揚格師資培訓</li>
                <li class="mb-1 last:mb-0">2020 取得艾揚格瑜珈高階認證</li>
              </ul>
            </div>
          </li>
          <li
            class="w-full md:w-[45%] lg:w-[29%] flex-shrink-0 odd:bg-brown2 even:bg-brown1 text-white px-6 pt-14 pb-6 rounded-2xl relative"
          >
            <div>
              <img
                src="../assets/image/teacher-2.png"
                alt=""
                class="w-24 h-24 rounded-full border-2 border-brown1 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
              />
              <h4 class="text-xl text-center mb-1">Kanae 老師</h4>
              <p class="mb-4 text-center">教學經歷 3 年</p>
              <p class="mb-4">
                “希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。”
              </p>
              <ul>
                <li class="mb-1 last:mb-0">美國瑜珈聯盟 RYT200 小時師資認證</li>
                <li class="mb-1 last:mb-0">自然呼吸瑜珈會館開授倒立研習</li>
                <li class="mb-1 last:mb-0">簡善琳瑜珈會館開授倒立研習</li>
              </ul>
            </div>
          </li>
          <li
            class="w-full md:w-[45%] lg:w-[29%] flex-shrink-0 odd:bg-brown2 even:bg-brown1 text-white px-6 pt-14 pb-6 rounded-2xl relative"
          >
            <div>
              <img
                src="../assets/image/teacher-3.png"
                alt=""
                class="w-24 h-24 rounded-full border-2 border-brown1 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
              />
              <h4 class="text-xl text-center mb-1">Carol Tang 老師</h4>
              <p class="mb-4 text-center">教學經歷 10 年</p>
              <p class="mb-4">
                “瑜珈是一種生活態度， 學習平衡不強求，堅持不放棄， 修煉心靈活在當下。”
              </p>
              <ul>
                <li class="mb-1 last:mb-0">美國瑜珈聯盟 RYT200 小時師資認證</li>
                <li class="mb-1 last:mb-0">自然呼吸瑜珈會館開授倒立研習</li>
                <li class="mb-1 last:mb-0">簡善琳瑜珈會館開授倒立研習</li>
              </ul>
            </div>
          </li>
          <li
            class="w-full md:w-[45%] lg:w-[29%] flex-shrink-0 odd:bg-brown2 even:bg-brown1 text-white px-6 pt-14 pb-6 rounded-2xl relative"
          >
            <div>
              <img
                src="../assets/image/teacher-4.png"
                alt=""
                class="w-24 h-24 rounded-full border-2 border-brown1 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
              />
              <h4 class="text-xl text-center mb-1">Carol Tang 老師</h4>
              <p class="mb-4 text-center">教學經歷 10 年</p>
              <p class="mb-4">
                “因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。
                我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能，並將瑜珈自然的融入自己的生活中。”
              </p>
              <ul>
                <li class="mb-1 last:mb-0">協會認證艾揚格瑜珈老師</li>
                <li class="mb-1 last:mb-0">2010 年完成四年的艾揚格師資培訓</li>
                <li class="mb-1 last:mb-0">2020 取得艾揚格瑜珈高階認證</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="fixed bg-black_4 w-full top-0 left-0 h-dvh z-50 overflow-auto"
      v-show="isModal"
      @click="isModal = false"
    >
      <div
        class="flex flex-col md:flex-row items-center gap-10 px-4 md:px-6 lg:px-14 py-8 md:py-16 rounded-2xl bg-brown2 relative w-[calc(100%-32px)] max-w-[920px] mx-auto my-20"
        @click.stop
      >
        <div class="w-full md:w-1/2">
          <img
            src="~/assets/image/yoga-4.jpeg"
            alt=""
            class="rounded-2xl w-full object-cover max-h-56 md:max-h-[418px]"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-7 text-white">本月限定課程 - 空中瑜珈</h3>
          <p class="flex items-center gap-2 mb-4 text-white">
            授課老師：Carol Tang
            <span class="text-white px-4 py-1.5 rounded-full bg-brown1 text-sm">60 min</span>
          </p>
          <p class="text-white mb-4">
            使用掛布懸掛在半空，進行哈達瑜珈體位法練習<br />
            藉由地心引力的重力原理<br />
            鍛鍊核心肌群，舒緩脊椎壓力<br />
            訓練身體協調性，深層放鬆身體<br />
            課堂裡老師會視同學狀況安排教導倒立動作<br />
            對於不敢嘗試倒立的同學來說<br />
            藉由掛布的支持與保護<br />
            加上老師細心指導，讓同學能更快掌握
          </p>
          <NuxtLink to="/reservation" class="px-4 py-2 rounded text-xl text-brown2 bg-white"
            >立即預約</NuxtLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
