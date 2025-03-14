<script lang="ts" setup>

import GardnerBookShop from '../../assets/img/gardners-bookshop.svg';
import BookShopLogo from '../assets/img/bookshop-logo.svg';

</script>

<template>

  <section class="section-bookshop bg-blue-100 pt-16 pb-24">
    <div class="container-alt mx-auto px-4 2xl:max-w-screen-xl">
        <div class="flex justify-between items-center flex-wrap">
            <div>
                <h2 class="text-5xl font-bold mb-4"><span class="text-[rgb(87, 59,163)]">Bookshop.org</span> Partnership</h2>
                <p class="text-gray-700 mb-6 max-w-prose">
                  We are proud to partner with Bookshop.org, a socially conscious online bookstore supporting independent bookshops.
                </p>
            </div>
            <div class="min-w-[200px]">
                <BookShopLogo :fontControlled="false" filled />
            </div>
        </div>
      <div class="grid grid-cols-3 grid-rows-2 gap-8 *:self-center mt-12 full-bleed lg:w-full lg:mx-auto">
        <div class="bg-white rounded shadow p-6 col-start-1 col-end-1 row-start-1 row-end-1 text-right translate-x-1/4 flex flex-col items-end z-1">
          <h3 class="text-base lg:text-xl font-semibold mb-2">List with Nielsen</h3>
          <p class="text-gray-700 max-w-60 text-sm lg:text-base">
            Ensure your titles are listed with Nielsen Bookdata.
          </p>
        </div>
        <div class="bg-white rounded shadow p-6 col-start-1 col-end-1 row-start-2 row-end-2 text-right translate-x-1/4 flex flex-col items-end z-1">
          <h3 class="text-base lg:text-xl font-semibold mb-2">Customer Delivery</h3>
          <p class="text-gray-700 max-w-60 text-sm lg:text-base">
            Books reach Bookshop.org customers through our network.
          </p>
        </div>
        <div class="overflow-clip rounded-full aspect-square col-start-2 col-end-2 row-span-full *:h-full *:w-full scale-150 lg:scale-none">
            <GardnerBookShop :fontControlled="false" filled />
        </div>
        <div class="bg-white rounded shadow p-6 col-start-3 col-end-3 row-start-1 row-end-1 -translate-x-1/4 ">
          <h3 class="text-base lg:text-xl font-semibold mb-2">Stock Availability</h3>
          <p class="text-gray-700 max-w-60 text-sm lg:text-base">
            Make stock available from a UK Publisher or Distributor.
          </p>
        </div>
        <div class="bg-white rounded shadow p-6 col-start-3 col-end-3 row-start-2 row-end-2 -translate-x-1/4">
          <h3 class="text-base lg:text-xl font-semibold mb-2">Gardners Orders</h3>
          <p class="text-gray-700 max-w-60 text-sm lg:text-base">
            We order your books for Bookshop.org customers.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>