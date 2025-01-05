<template>
  <Navbar />
  <main class="bg-gray-100 py-10">
    <div class="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl lg:w-[95%] w-[95%] mx-auto">
      <ProductCard v-for="product in products"  :title="product.title" :description="product.description" :link="product.learnMoreLink" :checklist="product.checklist" :imageSrc="product.imageSrc" :price="product.price" :id="product.id" />
    </div>
  </main>
  
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from "../../components/ecommerce/Navbar.vue";
import ProductCard from "../../components/ecommerce/ProductCard.vue";
import { useEcomProductStore } from "../../stores/ecomProductStore";


const ecomProductStore= useEcomProductStore();
const products= ref<typeof ecomProductStore.products>([])

onMounted(()=>{
    products.value= ecomProductStore.getAllEcomProducts;
})

</script>
