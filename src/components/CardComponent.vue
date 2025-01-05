<template>
  <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group">
    <div class="relative overflow-hidden">
      <img :src="imageSrc" :alt="title" class="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button @click="handleButtonClick(link)" class="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-200">View Project</button>
      </div>
    </div>
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-200">{{ title }}</h2>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in technologies" :key="tech" class="px-2 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-md">
          {{ tech }}
        </span>
      </div>
      <div>
        <ul class="space-y-3">
          <li v-for="item in checklist" :key="item" class="flex items-center gap-3 capitalize">
            <Check :size="20" class="font-bold text-[#98C23C]" /> <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-center my-8">
        <a :href="link" class="inline-block bg-[#98C23C] w-full py-2 text-center text-white font-bold rounded-md hover:text-gray-200 transition-colors duration-200">
          Learn More
          <ArrowRightIcon class="inline-block w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon, Check } from "lucide-vue-next";
import { useRouter } from "vue-router";

defineProps<{
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  checklist: string[];
  link: string;
}>();

const router= useRouter()


const handleButtonClick= (link: string)=>{
    router.push(link)

}
</script>
