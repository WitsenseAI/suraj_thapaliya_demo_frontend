import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id: 1,
        imageSrc: "/ecommerce/projectbanner.jpg",
        title: "E-Commerce",
        description: "Simple Demo E-commerce Website",
        technologies: ["Vue.js", "TypeScript", "Pinia", "Tailwind CSS"],
        checklist: ["Responsive Design", "Product Catalog", "Shopping Cart", "User Authentication"],
        learnMoreLink: "/ecommerce",
      },
     
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getProductById: (state) => (id: number) => state.projects.find((p) => p.id === id),
  },
});
