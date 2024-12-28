<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
      <div class="mb-4">
        <label class="block text-navy mb-2" for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="w-full p-2 border rounded focus:border-orange focus:ring-orange"
          required
        >
      </div>
      <div class="mb-4">
        <label class="block text-navy mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full p-2 border rounded focus:border-orange focus:ring-orange"
          required
        >
      </div>
      <div class="mb-4">
        <label class="block text-navy mb-2" for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="w-full p-2 border rounded focus:border-orange focus:ring-orange"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="bg-orange text-white px-6 py-2 rounded hover:bg-navy transition-colors">
        Send Message
      </button>
    </form>
  </div>
</template>