<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="relative h-[400px] bg-navy overflow-hidden">
    <img 
      :src="image" 
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="text-white max-w-2xl">
        <h1 class="text-4xl font-bold mb-4 text-white">{{ title }}</h1>
        <p class="text-xl">{{ description }}</p>
      </div>
    </div>
  </div>
</template>