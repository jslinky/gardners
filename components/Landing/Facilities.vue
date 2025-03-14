<script lang="ts" setup>


import { Container, Globe, Truck } from 'lucide-vue-next'

</script>

<template>
  <section class="section-facilities bg-blue-100 py-12 relative z-2" :style="{  '--c1': 'var(--color-primary)', '--c2': 'var(--color-primary-tint)' }">
    <div class="container-alt mx-auto 2xl:max-w-screen-xl px-6 pt-6 pb-16 lg:px-12 bg-white rounded z-1 relative after:w-[50vw] after:h-full after:bg-white after:absolute after:top-0 after:right-0 after:left-1/2 after:z-[-1]">
      <h2 class="text-5xl font-bold mt-6">Our Facilities</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 *:aspect-landscape *:border *:border-gray-300">
        <div class="bg-white flex place-content-between p-10 flex-col">
          <div>
            <Container class="size-16 mb-4 text-primary" />
          </div>
          <div>
          <h3 class="text-2xl font-semibold mb-2 ">State-of-the-Art Warehouse</h3>
          <p class="text-gray-600 min-h-[3lh]">
            Our automated systems ensure efficient stock management and rapid order fulfillment.
          </p>
          </div>
        </div>
        <div class="bg-white flex place-content-between p-10 flex-col">
          <div>
            <Truck class="size-16 mb-4 text-primary" />
          </div>          
          <div>
          <h3 class="text-2xl font-semibold mb-2 ">Next-Day Shipping Facility</h3>
          <p class="text-gray-600 min-h-[3lh]">
            Optimized to get your orders to you as quickly as possible.
          </p>
          </div>
        </div>
        <div class="bg-white flex place-content-between p-10 flex-col">
          <div>
            <Globe class="size-16 mb-4 text-primary" />
          </div>          
          <div>
          <h3 class="text-2xl font-semibold mb-2 ">International Distribution</h3>
          <p class="text-gray-600 min-h-[3lh]">
            We distribute products globally with minimal lead times.
          </p>
          </div>
        </div>
      </div>
    </div>  
    <!-- <div class="section-facilities__backdrop absolute inset-0 w-full h-full *:w-full *:h-full object-cover mix-blend-luminosity opacity-10">
    </div>  -->
    <!-- <img src="./assets/img/about-us-banner.jpg" /> -->
  </section>    
</template>