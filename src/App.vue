<template>
  <RouterView/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSection from "./components/HeroSection.vue"; // Ensure correct path and .vue extension

export default defineComponent({
  name: "App.vue",
  components: {
    HeroSection, // Register the component here
  },
});
</script>
