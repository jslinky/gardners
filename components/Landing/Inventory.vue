<template>
  <!-- <section class="py-12 container-alt mx-auto 2xl:max-w-screen-xl">

    <div class="mt-8 flex flex-col md:flex-row md:items-center gap-x-16">
    <div class="md:w-1/2 mt-6 md:mt-0 grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full place-items-center overflow-clip">
        <img src="../../assets/img/ipad.png" alt="iPad Inventory lookup" class="z-1 w-2/3 mt-auto -translate-x-4 -rotate-2 translate-y-4 adjust-grip" />
    
        <img 
            src="../../assets/img/warehouse-updated.jpg" 
            alt="Warehouse or Bookshelves" 
            class="rounded shadow"
        />
    </div>      
        <div class="md:w-1/2">          
        <h2 class="text-4xl font-bold mb-4 ">Our Extensive Inventory</h2>
    <p class="text-gray-700 mb-6">
        We offer a wide selection of products, including books, DVDs, Blu-rays, music, and eBooks. With over 500K physical titles in stock and more than 300K eBook titles, our inventory is one of the largest in Europe.
    </p>
    <div class="flex *:flex-[1] *:last:flex-[1_1_100%] flex-wrap gap-8">
        <StatCard headline="500K" title="Titles" text="Ready to ship the same day to any UK address" />
        <StatCard headline="4.5 Million+" title="eBooks" text="Available for instant fulfilment to consumers.">
        <template #headline="cssClasses">
            <h3 :class="cssClasses.styles?.headline"><span :class="cssClasses.styles.headlineSpan">4.5</span><span :class="[cssClasses.styles.headlineSpan, 'text-[0.5em]']">Million +</span>
            <span :class="cssClasses.styles.title">ebooks</span></h3>        
        </template>
        </StatCard>
        <StatCard title="Largest Range" text="The largest range of physical English language media products in Europe." />
        </div>
        </div>
    </div>    

    </section>     -->


    <section class="pt-16 pb-24 mt-12">
    <div class="container-alt mx-auto 2xl:max-w-screen-xl">
        <div class="max-w-prose flex flex-col lg:px-8 lg:ml-[50%] relative">
            <h2 class="text-5xl font-bold mb-4 ">Our Extensive Inventory</h2>
            <p class="text-gray-700 mb-6 text-xl text-pretty font-semibold">
                We offer a wide selection of products, including books, DVDs, Blu-rays, music, and eBooks. With over 500K physical titles in stock and more than 300K eBook titles, our inventory is one of the largest in Europe.
            </p>
            <svg class="arrow absolute z-1 bottom-[-7rem] w-[230px] rotate-[41deg] left-0 -translate-x-2/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path fill="var(--color-primary)" d="M250.21 210.99a741.736 741.736 0 01-39.28-20.18c-2.91-1.6-5.56 1.89-4.26 4.17-1.44.09-2.71 1.05-2.5 2.91l.6 5.16a304.288 304.288 0 01-59.72-16.23 288.8 288.8 0 01-17.41-7.35c-5.05-2.33-10.18-4.65-14.74-7.85-2.02-1.42-4.11-3.12-5.79-5.11 8.34 2.04 17.05 2.33 25.53.36 5.46-1.27 11.49-3.41 15.19-7.84 3.57-4.29 3.89-9.98 1.46-14.9-6.24-12.6-21.54-11.22-32.58-6.76-8.6 3.47-18.3 9.78-19.17 19.31-8.21-3.88-15.63-9.56-21.45-16.2C59 120.98 54.35 93.51 54.41 68.4c0-3.94-6.12-3.95-6.12 0-.06 26.08 4.96 53.54 21.73 74.33 7.36 9.13 17.37 16.58 28.46 21.01 3.61 10.54 15.73 16.21 25.06 20.55 26.04 12.13 53.65 20.49 81.97 25.01.73 6.22 1.45 12.44 2.18 18.65.04.34.13.65.24.93-2.61 1.81-.99 6.68 2.44 5.5 13.82-4.79 27.16-10.83 39.85-18.1 1.87-1.07 2.11-4.28 0-5.29zm-146.52-51.81c-.44-4.46 2.22-8.35 5.74-11.05 4.23-3.25 9.53-5.42 14.62-6.87 5.3-1.51 11.79-2.16 16.4 1.51 3.44 2.74 5.95 7.85 3.06 11.86-2.9 4.02-8.79 5.55-13.37 6.53-8.87 1.9-17.96.96-26.45-1.97zm109.96 67.51l-1.92-16.46c2.38.33 4.77.64 7.16.92 3.91.45 3.88-5.67 0-6.12-2.63-.31-5.26-.66-7.89-1.03-.24-2.04-.47-4.07-.71-6.11-.02-.18-.06-.35-.1-.51a747.074 747.074 0 0031.82 16.44 225.3 225.3 0 01-28.36 12.87z"></path></svg>            
        </div>
      <div class="grid grid-cols-1 md:grid-cols-[288px_auto_288px] grid-rows-1 gap-8 *:self-center mt-16">
        <StatCard headline="500K" title="Titles" text="Ready to ship the same day to any UK address" class="md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 text-right translate-x-1/4 flex flex-col items-end aspect-landscape p-10 z-1" />        
        <div class="grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full place-items-center overflow-clip aspect-landscape md:col-start-2 md:col-end-2 row-span-full scale-110">
            
                <img src="../../assets/img/ipad.png" alt="iPad Inventory lookup" class="z-1 w-[80%] mt-auto -translate-x-6 -rotate-2 translate-y-12 adjust-grip" />
            
                <img 
                    src="../../assets/img/warehouse-updated.jpg" 
                    alt="Warehouse or Bookshelves" 
                    class="rounded shadow"
                />
            
        </div>
        <StatCard headline="4.5 Million+" title="eBooks" text="Available for instant fulfilment to consumers." class="md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-1 md:-translate-x-1/4 aspect-landscape p-10">
        <template #headline="cssClasses">
            <h3 :class="cssClasses.styles?.headline"><span :class="cssClasses.styles.headlineSpan">4.5</span><span :class="[cssClasses.styles.headlineSpan, 'text-[0.5em]']">Million +</span>
            <span :class="cssClasses.styles.title">ebooks</span></h3>        
        </template>
        </StatCard>

      </div>
      <p class="mt-20 text-xl text-center">The largest range of physical English language media products in Europe.</p>
    </div>
  </section>


</template>