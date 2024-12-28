<script setup lang="ts">
const competencies = [
  {
    icon: '⚡',
    title: 'Electrical Installation',
    description: 'Professional installation services for residential and commercial properties'
  },
  {
    icon: '🔧',
    title: 'Maintenance & Repairs',
    description: 'Regular maintenance and emergency repair services'
  },
  {
    icon: '🏢',
    title: 'Commercial Services',
    description: 'Specialized solutions for businesses and industrial facilities'
  },
  {
    icon: '🏠',
    title: 'Residential Services',
    description: 'Complete electrical solutions for homes and apartments'
  },
  {
    icon: '🔌',
    title: 'Power Systems',
    description: 'Installation and maintenance of power distribution systems'
  },
  {
    icon: '💡',
    title: 'Lighting Solutions',
    description: 'Modern lighting installation and energy-efficient upgrades'
  }
];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in competencies" :key="item.title" 
             class="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span class="text-3xl mr-4">{{ item.icon }}</span>
          <div>
            <h3 class="text-xl font-semibold mb-2 text-navy">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>