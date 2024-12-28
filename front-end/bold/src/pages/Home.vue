<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import CoreCompetencies from '../components/CoreCompetencies.vue';
</script>

<template>
  <div>
    <HeroSection
      title="Professional Electrical Services"
      subtitle="Expert electrical solutions for residential and commercial properties"
      ctaText="View Our Services"
      ctaLink="/services"
    />
    <AboutSection />
    <CoreCompetencies />
  </div>
</template>