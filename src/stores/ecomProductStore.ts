import { defineStore } from "pinia";

export const useEcomProductStore = defineStore("ecom_product", {
  state: () => ({
    products : [
      {
        id: 1,
        imageSrc: "/ecommerce/projectbanner.jpg",
        title: "Text-to-Video Creator",
        description: "Transform your written content into engaging videos using advanced AI. Perfect for marketing, education, and social media content.",
        checklist: ["Natural voice synthesis", "Dynamic scene generation", "Custom style presets"],
        learnMoreLink: "/ecommerce",
        price: 2000,
      },
      {
        id: 2,
        imageSrc: "/ecommerce/projectbanner.jpg",
        title: "Video Enhancement Suite",
        description: "Enhance your existing videos with AI-powered upscaling, stabilization, and style transfer technologies.",
        checklist: ["4K AI upscaling", "Smart color correction", "Style transfer filters"],
        learnMoreLink: "/ecommerce",
        price: 2000,
      },
      {
        id: 3,
        imageSrc: "/ecommerce/projectbanner.jpg",
        title: "Motion Synthesis Pro",
        description: "Create realistic character animations and motion sequences using advanced AI motion synthesis.",
        checklist: ["Natural motion generation", "Character rigging", "Motion blending"],
        learnMoreLink: "/ecommerce",
        price: 2000,
      },
    ],
  }),
  getters: {
    getAllEcomProducts: (state) => state.products,
    getEcomProductById: (state) => (id: number) => state.products.find((p) => p.id === id),
  },
});
