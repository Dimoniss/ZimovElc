<script setup lang="ts">
import { services } from '../data/services';
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-12 text-navy">Our Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <router-link 
        v-for="service in services"
        :key="service.id"
        :to="`/services/${service.id}`"
        class="group"
      >
        <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
          <h2 class="text-2xl font-bold mb-3 text-navy group-hover:text-orange transition-colors">
            {{ service.title }}
          </h2>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <span class="text-orange group-hover:text-navy transition-colors">
            Learn more →
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>