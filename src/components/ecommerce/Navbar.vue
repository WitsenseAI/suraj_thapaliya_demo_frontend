<template>
  <header class="bg-white shadow-md w-full sticky top-0 right-0 z-50">
    <div class="max-w-7xl flex justify-between items-center mx-auto  lg:w-[95%] w-[95%] lg:px-0 py-2">
      <!-- Logo Section -->
      <div class="flex items-center">
        <router-link to="/"><img src="/banner.jpg" alt="Witsense.AI Logo" class="h-12 w-auto mr-3" /></router-link>
      </div>

      <!-- Cart and User Section -->
      <div class="flex items-center gap-4">
        <button @click="handleCartClick" class="relative flex items-center">
          <ShoppingCart class="w-7 h-7 text-gray-800 hover:text-[#98C23C]" />
          <span class="absolute -top-3 -right-2 bg-[#98C23C] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">{{cartItems.length   }}</span>
        </button>
        <button class="px-5 py-2 border-2 border-gray-400 rounded-lg hover:border-[#98C23C] hover:text-[#98C23C] transition-all duration-300 hidden lg:flex md:flex" @click="handleSignInClick">Sign In</button>
        <button class="px-5 py-2 bg-[#98C23C] text-white rounded-lg hover:bg-[#7da52e] transition-all duration-300  hidden lg:flex md:flex" @click="handleSignUpClick">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import { useCartStore } from "../../stores/cartStore";
import { computed } from "vue";
import { useRouter } from "vue-router";
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const router= useRouter()



const handleSignInClick=()=>{
    router.push("/login")

}
const handleSignUpClick=()=>{
    router.push("/register")

}
const handleCartClick=()=>{
    router.push("/cart")
}
</script>
