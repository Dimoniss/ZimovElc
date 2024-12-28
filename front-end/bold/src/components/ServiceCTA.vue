<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4 text-center">
      <router-link 
        to="/contact" 
        class="inline-block bg-orange text-white px-8 py-3 rounded-lg hover:bg-navy transition-colors"
      >
        {{ text }}
      </router-link>
    </div>
  </div>
</template>