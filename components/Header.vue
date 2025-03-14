<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { Search, CircleUserRound, Handshake, Menu, X } from 'lucide-vue-next'

const menuOpen = ref(false);

const headerEl = useTemplateRef('header')

const headerWidth = ref(0)

useResizeObserver(headerEl, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  headerWidth.value = width
})

const headerWidthInRems = computed(() => headerWidth.value / 16)
const breakpoint = 52

watch(headerWidthInRems, (width, oldWidth) => {
    
  if (width >= breakpoint) {
    menuOpen.value = true
  }
  if(oldWidth >= breakpoint && width < breakpoint) {
    menuOpen.value = false
  }
})

</script>

<template>
  <header ref="header" class="text-white">
    <div class="container-alt @container/header mx-auto gap-y-2 pt-2 flex flex-col">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-8 w-full"> 
          <div class="text-xl font-semibold w-[clamp(100px,15vw,200px)] shrink-0">
            <img src="../assets/img/GardnersLogoNew.png" alt="Gardners Logo" />
          </div>
          <form class="flex-1 grid grid-cols-[1fr_max-content] @5xl:grid-cols-[1fr_max-content] relative">
            <label for="search" class="text-gray-700 text-xs inline-flex items-end font-semibold @5xl:mr-4 @5xl:pb-4 sr-only">Quick Search</label>
            <input type="search" placeholder="Search by keyword, author, ISBN..." class="bg-white text-gray-800 px-4 py-4 rounded shadow w-full" />
            <button @click="() => { console.log('clicked') }" class="grid text-white h-full bg-primary place-content-center aspect-square rounded-r-md hover:cursor-pointer">
              <Search />
            </button>            
          </form>
          <div class="flex-col text-gray-700 text-sm gap-y-2 sr-only @5xl:not-sr-only flex">
            <p>Telephone: <a href="tel:+441323521555" class="font-semibold">+44 (0)1323 521555</a></p>
            <div class="flex flex-col @lg:flex-row @lg:*:first:after:border-r @lg:*:first:after:mx-3 @lg:*:first:after:text-gray-700 *:text-primary">
              <a href="#" mailto="uksales@gardners.com">uksales@gardners.com</a>
              <a href="#" mailto="internationalsales@gardners.com">internationalsales@gardners.com</a>
            </div>
          </div>
        </div>
      </div>
      <nav class="bg-primary w-screen mx-[calc(-50vw+50%)] text-sm">
        <div class="container-alt mx-auto flex justify-between items-center">
          <details :open="menuOpen" @click.prevent="menuOpen = !menuOpen">
            <summary class="@3xl:hidden">
              <div class="flex gap-2 items-center">
                <component :is="menuOpen ? X : Menu" class="inline-block" />
                <span class="sr-only">Menu</span>
              </div>
            </summary>
            <div class="*:text-white *:hover:text-gray-300 *:px-6 *:py-4 *:inline-flex @3xl:-ml-6 left-0 flex flex-col @3xl:flex-row">
              <a href="#">Buying from us</a>
              <a href="#">Selling from us</a>
              <a href="#">Retailer Services</a>
              <a href="#">Supplier Services</a>              
            </div>
          </details>
          <div class="flex gap-6 *:flex *:items-center *:gap-x-1 *:py-4">
            <a href="#" class="text-white hover:text-gray-300">
              <CircleUserRound class="inline-block" />
              <span class="sr-only lg:not-sr-only">Sign In to your account</span>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <Handshake class="inline-block" />
              <span class="sr-only lg:not-sr-only">Apply for an account</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>