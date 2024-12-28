<script setup lang="ts">
defineProps<{
  features: string[];
}>();
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-8 text-navy">Key Features</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li v-for="feature in features" :key="feature" 
            class="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <span class="text-orange mr-3">✓</span>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>