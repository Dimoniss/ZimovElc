<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
    <h2 class="text-xl font-bold mb-2 text-navy">{{ title }}</h2>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>