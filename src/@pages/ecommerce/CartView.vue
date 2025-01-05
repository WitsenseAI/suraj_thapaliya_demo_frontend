<template>
  <div class="max-w-7xl mx-auto bg-gray-100 flex justify-center items-center min-h-screen py-10">
    <div class="w-[95%] bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-2xl font-extrabold mb-8 text-gray-800">Shopping Cart</h1>

      <div v-if="cartItems.length > 0" class="space-y-10">
        <div >
          <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between border-b pb-6">
            <!-- Product Info Section -->
            <div class="flex items-center gap-6">
              <img :src="item.imageSrc || '/placeholder.jpg'" alt="Product Image" class="w-28 h-28 object-cover rounded-md shadow" />
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">{{ item.title }}</h2>
                <p class="text-sm text-gray-500 mt-1">
                  Quantity: <span class="font-medium">{{ item.quantity }}</span>
                </p>
                <p class="text-lg text-[#98C23C] font-bold mt-2">${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>

            <!-- Remove Button -->
            <button @click="removeItem(item.id)" class="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all shadow-md">Remove</button>
          </div>
        </div>

        <!-- Total and Actions -->
        <div class="flex justify-between items-center mt-12">
          <div class="text-2xl font-extrabold text-gray-800">Total: ${{ totalPrice.toFixed(2) }}</div>
          <button @click="clearCart" class="px-8 py-4 bg-[#98C23C] text-white font-bold rounded-lg hover:bg-[#7da52e] transition-all shadow-lg">Clear Cart</button>
        </div>
      </div>

      <!-- Empty Cart Section -->
      <div v-else class="text-center py-28">
        <p class="text-2xl text-gray-500 mb-6">Your cart is empty.</p>
        <router-link to="/ecommerce" class="inline-block bg-[#98C23C] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7da52e] transition-all shadow-md"> Continue Shopping </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../../stores/cartStore";

// Access cart store
const cartStore = useCartStore();

// Get cart items
const cartItems = computed(() => cartStore.cartItems);

// Calculate total price
const totalPrice = computed(() => cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0));

// Remove item from cart
const removeItem = (id: number) => {
  cartStore.removeFromCart(id);
};

// Clear entire cart
const clearCart = () => {
  cartStore.clearCart();
};
</script>

<style scoped>
div {
  transition: all 0.3s ease;
}
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
button {
  transform: translateY(0);
}
button:hover {
  transform: translateY(-2px);
}
</style>
