<script setup lang="ts">
const mission = {
  title: "Our Mission",
  description: "To provide exceptional electrical services with the highest standards of safety, quality, and customer satisfaction."
};

const values = [
  { title: "Excellence", description: "Delivering superior quality in every project" },
  { title: "Safety", description: "Maintaining the highest safety standards" },
  { title: "Reliability", description: "Consistent and dependable service delivery" },
  { title: "Innovation", description: "Embracing modern electrical solutions" }
];
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">About Us</h2>
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h3 class="text-2xl font-semibold mb-4">{{ mission.title }}</h3>
        <p class="text-gray-600">{{ mission.description }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="value in values" :key="value.title" class="p-6 bg-gray-50 rounded-lg">
          <h4 class="font-bold mb-2 text-navy">{{ value.title }}</h4>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>