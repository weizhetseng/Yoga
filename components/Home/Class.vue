<template>
  <div class="py-14 relative bg-brown3">
    <div
      class="container flex-col md:flex-row flex items-center gap-7.5 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2"
    >
      <div class="w-full md:w-1/2">
        <h3 class="text-7 mb-1 text-brown1">精心設計、課程多元</h3>
        <p class="text-xl text-brown2 mb-6">
          教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。
        </p>
        <NuxtLink to="/course" class="flex text-brown1 items-center gap-2">
          課程介紹<Icon class="text-xl" name="mingcute:arrow-right-line" />
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2 block lg:hidden">
        <div class="flex justify-center flex-wrap gap-y-7.5 -mx-4">
          <div class="w-1/2 px-4 flex-shrink-0">
            <img
              src="~/assets/image/yoga-8.jpg"
              alt=""
              class="w-full h-[150px] object-cover rounded-2xl"
            />
          </div>
          <div class="w-1/2 px-4 flex-shrink-0">
            <img
              src="~/assets/image/yoga-9.jpg"
              alt=""
              class="w-full h-[150px] object-cover rounded-2xl"
            />
          </div>
          <div class="w-1/2 px-4 flex-shrink-0">
            <img
              src="~/assets/image/yoga-10.jpg"
              alt=""
              class="w-full h-[150px] object-cover rounded-2xl"
            />
          </div>
          <div class="w-1/2 px-4 flex-shrink-0">
            <img
              src="~/assets/image/yoga-11.jpg"
              alt=""
              class="w-full h-[150px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block w-1/2 ml-auto pl-7.5">
      <div class="flex gap-7.5 overflow-auto">
        <div class="w-[445px] h-[445px] flex-shrink-0">
          <img
            src="~/assets/image/yoga-8.jpg"
            alt=""
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="w-[445px] h-[445px] flex-shrink-0">
          <img
            src="~/assets/image/yoga-9.jpg"
            alt=""
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="w-[445px] h-[445px] flex-shrink-0">
          <img
            src="~/assets/image/yoga-10.jpg"
            alt=""
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div class="w-[445px] h-[445px] flex-shrink-0">
          <img
            src="~/assets/image/yoga-11.jpg"
            alt=""
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
