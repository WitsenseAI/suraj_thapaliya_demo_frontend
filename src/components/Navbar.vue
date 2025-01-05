<template>
  <header class="bg-white  flex-shrink-0">
    <div class="max-w-7xl flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div class="flex items-center">
        <router-link to="/"><img src="/banner.jpg" alt="Witsense.AI Logo" class="h-12 w-auto mr-3" /></router-link>
      </div>

      <div class="flex gap-4 font-semibold text-gray-600">
        <button class="px-5 py-2 border-2 border-gray-400 rounded-lg hover:border-[#98C23C] hover:text-[#98C23C] transition-all duration-300" @click="handleSignInClick">Sign In</button>
        <button class="px-5 py-2 bg-[#98C23C] text-white rounded-lg hover:bg-[#7da52e] transition-all duration-300" @click="handleSignUpClick">Sign Up</button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router= useRouter()


const handleSignInClick=()=>{
    router.push("/login")

}
const handleSignUpClick=()=>{
    router.push("/register")

}
</script>
