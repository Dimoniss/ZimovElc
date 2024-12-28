<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects';
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Our Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </div>
</template>