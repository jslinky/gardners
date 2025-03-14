<script lang="ts" setup>
import { LandingBookShopOrg, LandingHero } from '#components';
</script>

<template>
  <!-- ========== HEADER / HERO SECTION ========== -->
  <Header />
  <LandingHero />
  <LandingAbout />
  <!-- ========== OUR EXTENSIVE INVENTORY SECTION ========== -->
  <LandingInventory />
  <!-- ========== OUR FACILITIES SECTION ========== -->
  <LandingFacilities />
  <!-- ========== RETAILER SERVICES SECTION ========== -->
  <LandingRetailerServices />
  <!-- ========== SELLING TO GARDNERS SECTION ========== -->
  <LandingSelling />
  <!-- ========== EU TRADING INFORMATION SECTION ========== -->
  <!-- ========== BOOKSHOP.ORG PARTNERSHIP SECTION ========== -->
  <LandingBookShopOrg />

  <!-- ========== GET STARTED TODAY SECTION ========== -->
  <section class="py-12">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl font-bold mb-4">Get Started Today</h2>
      <p class="text-gray-700 mb-8">
        Ready to work with Gardners? Whether you’re a retailer or supplier, sign up for an account or contact us for more information.
      </p>
      <button class="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 font-semibold">
        Sign Up
      </button>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="bg-gray-900 text-white py-4">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm">&copy; 2025 <a href="http://www.justinsmall.net">Justin Small</a>. Designed for interview purposes only.</p>
      <p class="text-sm">&copy; 2025 Gardners. Some content used for demonstration purposes only.</p>
    </div>
  </footer>
</template>
