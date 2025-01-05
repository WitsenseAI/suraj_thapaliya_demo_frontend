<template>
    <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group">
      <div class="relative overflow-hidden">
        <img :src="imageSrc" :alt="title" class="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button @click="addToCartHandler(id, title, imageSrc, price)" class="bg-[#98C23C] text-white px-6 py-2 rounded-md hover:bg-[#7da52e] transition-all duration-300">Add to Cart</button>
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2 hover:text-[#98C23C] transition-colors duration-200">{{ title }}</h2>
        <p class="text-gray-600 mb-4">{{ description }}</p>
  
        <div class="flex items-center justify-between mb-6">
          <span class="text-3xl font-bold text-[#98C23C]">${{ price.toFixed(2) }}</span>
        </div>
  
        <div>
          <ul class="space-y-3">
            <li v-for="item in checklist" :key="item" class="flex items-center gap-3 capitalize">
              <Check :size="20" class="font-bold text-[#98C23C]" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Check } from "lucide-vue-next";
import { useCartStore } from "../../stores/cartStore";
  
  defineProps<{
    imageSrc: string;
    title: string;
    description: string;
    price: number;
    checklist: string[];
    link: string;
    id: number;
  }>();
  
  const cartStore = useCartStore();
  
  // Add to Cart Handler
  const addToCartHandler = (id:number, title:string, imageSrc: string, price: number) => {
    cartStore.addToCart({
      id,
      title,
      price,
      imageSrc,
    });
    console.log("added to cart")
    alert('Producxt added to cart!');
  };
  </script>
  