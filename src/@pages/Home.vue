<template>
  <div class="fixed top-0 right-0 left-0 z-50">
    <!-- <TopBar /> -->
    <NavBar />
  </div>
  <main class="bg-gray-100 pb-20">
    <div class="lg:w-[95%] w-[95%] mx-auto">
      <div class="flex flex-col justify-center items-center h-screen font-bold p-5 tracking-wide text-center">
        <h1 class="lg:text-6xl md:text-4xl text-2xl">
          Empowering Precision with
          <span class="text-[#98C23C]">AI-Driven Annotation & Life-Saving Robotics</span>
        </h1>
        <button class="mt-8 text-md px-6 py-3 bg-[#98C23C] text-white rounded-lg shadow-lg hover:bg-[#7da52e] transition-all duration-300">Learn More</button>
      </div>

      <div class="demo_projects">
        <div class="heading lg:text-4xl font-bold flex justify-center md:text-3xl text-2xl">
          <h3>Suraz's Demo Project (vue)</h3>
        </div>
        <div class="h-[4px] mt-2 bg-[#98C23C] w-[10%] mx-auto"></div>

        <div class="projects grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8">
          <CardComponent v-for="project in projects" :link="project.learnMoreLink" :image-src="project.imageSrc" :title="project.title" :description="project.description" :checklist="project.checklist" :technologies="project.technologies" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import NavBar from "../components/Navbar.vue";
import CardComponent from "../components/CardComponent.vue";
import { useProjectStore } from "../stores/projectStore";
import { onMounted, ref } from "vue";
const projectStore = useProjectStore();
const projects = ref<typeof projectStore.projects>([]);
onMounted(() => {
  projects.value = projectStore.getAllProjects;
});
</script>
