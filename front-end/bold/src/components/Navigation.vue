<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-navy text-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-orange">Zimov Electric</router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link 
            v-for="item in ['/', '/services', '/portfolio', '/contact']" 
            :key="item"
            :to="item"
            class="px-3 py-2 rounded-md hover:bg-orange transition-colors"
            :class="{ 'bg-orange': route.path === item }"
          >
            {{ item === '/' ? 'Home' : item.slice(1).charAt(0).toUpperCase() + item.slice(2) }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="p-2 text-orange">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in ['/', '/services', '/portfolio', '/contact']" 
          :key="item"
          :to="item"
          class="block px-3 py-2 rounded-md hover:bg-orange transition-colors"
          :class="{ 'bg-orange': route.path === item }"
          @click="isMenuOpen = false"
        >
          {{ item === '/' ? 'Home' : item.slice(1).charAt(0).toUpperCase() + item.slice(2) }}
        </router-link>
      </div>
    </div>
  </nav>
</template>