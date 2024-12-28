<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}>();
</script>

<template>
  <div class="bg-navy text-white py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-6 text-white">{{ title }}</h1>
      <p class="text-xl mb-8">{{ subtitle }}</p>
      <router-link 
        :to="ctaLink" 
        class="bg-orange text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange transition-colors inline-block"
      >
        {{ ctaText }}
      </router-link>
    </div>
  </div>
</template>