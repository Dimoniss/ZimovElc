<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
}
</style>