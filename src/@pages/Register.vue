<template>
    <section class="bg-gradient-to-r from-blue-900 to-sky-900  min-h-screen h-fit w-full flex items-center justify-center font-poppins py-8">
      <div class="  "></div>
      <div class="relative w-full max-w-md mx-auto px-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6 space-y-4 md:space-y-6">
            <h1 class="text-xl text-center uppercase font-bold leading-tight tracking-wide text-gray-700 md:text-2xl">Register</h1>
            <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  v-model="name" 
                  type="text" 
                  name="name" 
                  id="name" 
                  class="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
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
              <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <input 
                  v-model="confirmPassword" 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  class="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg block w-full p-2.5" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    v-model="agreeTerms" 
                    id="terms" 
                    type="checkbox" 
                    class="w-4 h-4 border border-blue-950 rounded bg-gray-50" 
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="text-gray-500 dark:text-gray-300">I agree to the <a href="#" class="text-blue-950 hover:underline">Terms and Conditions</a></label>
                </div>
              </div>
              <button 
                type="submit" 
                class="w-full text-white bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                :disabled="!isFormValid"
              >
                Create Account
              </button>
              <p class="text-sm font-light text-gray-500">
                Already have an account? 
                <span @click="goToLogin" class="font-medium text-blue-950 hover:underline cursor-pointer">Login here</span>
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
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const agreeTerms = ref(false)
  
  const isFormValid = computed(() => {
    return name.value.length > 0 &&
           email.value.includes('@') &&
           password.value.length >= 6 &&
           password.value === confirmPassword.value &&
           agreeTerms.value
  })
  
  const handleSubmit = () => {
    if (isFormValid.value) {
      // Here you would typically call your registration service
      console.log('Registration attempt', { 
        name: name.value, 
        email: email.value, 
        password: password.value 
      })
      // If registration is successful, you might want to redirect the user
      // router.push('/login')
    } else {
      alert('Please fill out all fields correctly and agree to the terms and conditions.')
    }
  }
  
  const goToLogin = () => {
    router.push('/login')
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  
  