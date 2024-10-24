<template>
  <div class="bg-brown3 pt-10 pb-14">
    <div class="container">
      <h3 class="text-center text-7 text-brown1 mb-8">聽聽他們怎麼說</h3>
      <div class="overflow-auto">
        <ul class="hidden md:grid gap-x-7.5 gap-y-2 grid-flow-col auto-cols-[330px] grid-rows-2">
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-1.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>Joanne <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">服務很好、設備優良！</p>
              </div>
            </div>
          </li>
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-2.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>穎旻 <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">上課後身體健康很多</p>
              </div>
            </div>
          </li>
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-3.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>子琪 <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">上課很有趣！</p>
              </div>
            </div>
          </li>
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-4.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>葉子 <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">老師的教學很專業</p>
              </div>
            </div>
          </li>
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-5.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>Ray <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">很舒壓</p>
              </div>
            </div>
          </li>
          <li class="w-[330px]">
            <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
              <img src="~/assets/image/user-6.png" alt="" class="w-15 h-15 rounded-full" />
              <div class="text-brown1">
                <p>俊儀 <span class="text-sm">Oct 17 2020</span></p>
                <div class="flex items-center">
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                  <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                </div>
                <p class="line-clamp-1">讚的！</p>
              </div>
            </div>
          </li>
        </ul>
        <ClientOnly>
          <div class="md:hidden block">
            <swiper-container
              class="mb-4"
              :navigation="{
                nextEl: '.next',
                prevEl: '.prev',
              }"
            >
              <swiper-slide>
                <ul>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-1.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>Joanne <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">服務很好、設備優良！</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-2.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>穎旻 <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">上課後身體健康很多</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-3.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>子琪 <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">上課很有趣！</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
              <swiper-slide>
                <ul>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-4.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>葉子 <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">老師的教學很專業</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-5.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>Ray <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">很舒壓</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-2 last:mb-0">
                    <div class="rounded-2xl bg-white p-3 flex items-center gap-5 h-full w-full">
                      <img src="~/assets/image/user-6.png" alt="" class="w-15 h-15 rounded-full" />
                      <div class="text-brown1">
                        <p>俊儀 <span class="text-sm">Oct 17 2020</span></p>
                        <div class="flex items-center">
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                          <Icon class="text-brown2 text-2xl" name="material-symbols-light:star" />
                        </div>
                        <p class="line-clamp-1">讚的！</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
            </swiper-container>
            <div class="flex items-center justify-between">
              <button type="button" class="prev text-3xl text-brown1">
                <Icon name="mingcute:arrow-left-line" />
              </button>
              <button type="button" class="next text-3xl text-brown1">
                <Icon name="mingcute:arrow-right-line" />
              </button>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-button-disabled {
  opacity: 0.2;
}
</style>
