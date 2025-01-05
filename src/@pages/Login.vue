<template>
    <section class=" bg-gradient-to-r from-[#98C23C] to-[#7da52e] h-screen w-full flex items-center justify-center lg:block font-poppins">
      <div class="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
        <div class="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-center uppercase font-bold leading-tight tracking-wide text-gray-700 md:text-2xl">Login</h1>
            <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input 
                  v-model="email" 
                  type="email" 
                  name="email" 
                  id="email" 
                  class="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5" 
                  placeholder="name@gmail.com" 
                  required 
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input 
                  v-model="password" 
                  type="password" 
                  name="password" 
                  id="password" 
                  class="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      v-model="rememberMe" 
                      id="remember" 
                      type="checkbox" 
                      class="w-4 h-4 border border-blue-950 rounded bg-gray-50" 
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-gray-700 hover:underline">Forgot password?</a>
              </div>
              <button 
                type="submit" 
                class="w-full text-white bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500">
                Don't have an account yet? 
                <span @click="goToSignUp" class="font-medium text-blue-950 hover:underline cursor-pointer">Sign up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  
  const isFormValid = computed(() => {
    return email.value.includes('@') && password.value.length >= 6
  })
  
  const handleSubmit = () => {
    if (isFormValid.value) {
      router.push('/dashboard')
    } else {
      alert('Please enter a valid email and password (at least 6 characters)')
    }
  }
  
  const goToSignUp = () => {
    router.push('/signup')
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>