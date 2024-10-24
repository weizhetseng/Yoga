<script setup lang="ts"></script>

<template>
  <main class="pt-16 pb-26">
    <div class="container">
      <h2 class="text-7 mb-4 text-center text-brown1">立即預約</h2>
      <ul class="flex items-center justify-center mb-8 gap-4 md:gap-7.5">
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>選擇方案</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-white bg-brown1">
          <p>填寫資料</p>
        </li>
        <li class="p-5 md:px-12 py-3 rounded-2xl text-brown1 bg-brown3">
          <p>完成預約</p>
        </li>
      </ul>
      <div class="max-w-90 mx-auto text-textGray">
        <div class="flex items-center gap-4 mb-9">
          <p>您選擇的是</p>
          <p class="text-brown2 text-xl">首次體驗課程-基礎</p>
        </div>
        <form action="" @submit.prevent="$router.push('/reserveDone')">
          <ul>
            <li class="mb-9 last:mb-0">
              <h4 class="mb-5">1. 是否接觸過瑜珈?</h4>
              <div class="flex items-center gap-8">
                <label for="" class="flex items-center gap-1">
                  <input type="radio" name="" id="" />
                  <span>是</span>
                </label>
                <label for="" class="flex items-center gap-1">
                  <input type="radio" name="" id="" />
                  <span>否</span>
                </label>
              </div>
            </li>
            <li class="mb-9 last:mb-0">
              <h4 class="mb-4">2. 想改善的生活問題?</h4>
              <ul class="flex flex-wrap -mx-2 gap-y-4">
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>肌耐力不足</span>
                  </label>
                </li>
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>柔軟度不佳</span>
                  </label>
                </li>
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>壓力大</span>
                  </label>
                </li>
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>姿勢不正</span>
                  </label>
                </li>
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>睡眠品質差</span>
                  </label>
                </li>
                <li class="w-1/3 px-2">
                  <label for="" class="flex gap-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span>注意力不足</span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="mb-9 last:mb-0">
              <h4 class="mb-4">3. 每週累積運動量約為多少?</h4>
              <ul class="flex items-center -mx-4 flex-wrap gap-y-1">
                <li class="w-1/2 px-4">
                  <label for="" class="flex items-center gap-1">
                    <input type="radio" name="" id="" />
                    <span>150 分鐘以上</span>
                  </label>
                </li>
                <li class="w-1/2 px-4">
                  <label for="" class="flex items-center gap-1">
                    <input type="radio" name="" id="" />
                    <span>75~150 分鐘</span>
                  </label>
                </li>
                <li class="w-1/2 px-4">
                  <label for="" class="flex items-center gap-1">
                    <input type="radio" name="" id="" />
                    <span>30~75 分鐘</span>
                  </label>
                </li>
                <li class="w-1/2 px-4">
                  <label for="" class="flex items-center gap-1">
                    <input type="radio" name="" id="" />
                    <span>30 分鐘以下</span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="mb-9 last:mb-0">
              <h4 class="mb-1">4. 上課預約報到日</h4>
              <p class="mb-2 text-sm">
                若還沒有確定的日期，可以等待專員與您聯絡時再做詳細的諮詢哦！
              </p>
              <input
                type="date"
                name=""
                id=""
                class="w-30 h-9 rounded border border-brown2 px-3 py-1.5 placeholder:text-brown2"
              />
            </li>
            <li class="mb-9 last:mb-0">
              <h4 class="mb-4">5. 填寫基本資料，完成預約後會寄送通知至電子信箱</h4>
              <ul class="flex flex-wrap -mx-1 gap-y-4">
                <li class="flex flex-col gap-2 px-1 w-1/2">
                  <label for="">姓名</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="請輸入您的姓名"
                    class="px-3 py-1.5 rounded border border-brown2 placeholder:text-brown2"
                  />
                </li>
                <li class="flex flex-col gap-2 px-1 w-1/2">
                  <label for="">年齡</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="請輸入您的年齡"
                    class="px-3 py-1.5 rounded border border-brown2 placeholder:text-brown2"
                  />
                </li>
                <li class="flex flex-col gap-2 px-1 w-full">
                  <label for="">性別</label>
                  <select name="" id="" class="px-3 py-1.5 w-[70px] rounded border border-brown2">
                    <option value="">男</option>
                    <option value="">女</option>
                  </select>
                </li>
                <li class="flex flex-col gap-2 px-1 w-full">
                  <label for="">電子信箱</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="email@example.com"
                    class="px-3 py-1.5 rounded border border-brown2 placeholder:text-brown2"
                  />
                </li>
                <li class="flex flex-col gap-2 px-1 w-full">
                  <label for="">手機號碼</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="0912-345-678"
                    class="px-3 py-1.5 rounded border border-brown2 placeholder:text-brown2"
                  />
                </li>
              </ul>
            </li>
            <li class="mb-9 last:mb-0">
              <button
                type="submit"
                class="bg-brown2 text-white block text-center p-2 w-full rounded text-xl"
              >
                送出
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </main>
</template>
