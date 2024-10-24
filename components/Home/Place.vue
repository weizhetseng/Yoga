<template>
  <div class="py-14">
    <div class="container flex flex-col-reverse md:flex-row items-center gap-7.5">
      <div class="w-full md:w-1/2 flex gap-7.5 overflow-auto">
        <div>
          <img
            src="~/assets/image/yoga-5.jpg"
            alt=""
            class="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-row md:flex-col gap-7.5">
          <img
            src="~/assets/image/yoga-6.jpg"
            alt=""
            class="rounded-2xl w-full h-full md:h-1/2 object-cover"
          />
          <img
            src="~/assets/image/yoga-7.jpg"
            alt=""
            class="rounded-2xl w-full h-full md:h-1/2 object-cover"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h3 class="text-7 mb-1 text-brown1">舒適空間、靜心放鬆</h3>
        <p class="text-xl text-brown2 mb-6">
          我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
        </p>
        <NuxtLink to="/surroundings" class="flex text-brown1 items-center gap-2">
          環境介紹<Icon class="text-xl" name="mingcute:arrow-right-line" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
