// stores/cartStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<{ id: number; title: string; imageSrc:string; price: number; quantity: number }[]>([]);

  // Add to Cart
  const addToCart = (product: { id: number; title: string; imageSrc:string; price: number }) => {
    const existingItem = cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  // Remove from Cart
  const removeFromCart = (id: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
  };

  // Clear Cart
  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
