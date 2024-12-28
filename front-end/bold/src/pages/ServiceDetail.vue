<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { services } from '../data/services';
import ServiceHero from '../components/ServiceHero.vue';
import ServiceFeatures from '../components/ServiceFeatures.vue';
import ServiceCTA from '../components/ServiceCTA.vue';

const route = useRoute();
const service = computed(() => 
  services.find(s => s.id === route.params.id)
);
</script>

<template>
  <div v-if="service">
    <ServiceHero 
      :title="service.title"
      :description="service.fullDescription"
      :image="service.image"
    />
    <ServiceFeatures :features="service.features" />
    <ServiceCTA :text="service.ctaText" />
  </div>
  <div v-else class="container mx-auto px-4 py-12">
    <p>Service not found.</p>
  </div>
</template>