<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, RouterLink } from "vue-router";

import heroBackground1 from "../assets/hero-slide/slide_1.jpg";
import heroBackground2 from "../assets/hero-slide/slide_2.jpg";
import heroBackground3 from "../assets/hero-slide/slide_3.jpg";
import heroBackground4 from "../assets/hero-slide/slide_4.jpg";

const { t } = useI18n(); // Use the translation function

// list of images for the slider
const sliderImages = ref([
  heroBackground1,
  heroBackground2,
  heroBackground3,
  heroBackground4,
]);

const currentSlide = ref(0); // Current slide index
const backgroundImage = ref(sliderImages.value[0]); // Initial background image

// function to change the slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length;
  backgroundImage.value = sliderImages.value[currentSlide.value];
};

// automatic slide change
onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000); // change slide every 5 seconds
});
</script>

<template>
  <div class="home">
    <!-- Hero Section -->

    <section class="hero" :class="`hero-background-${currentSlide + 1}`">
      <h1>{{ t("hero.title") }}</h1>
      <p>{{ t("hero.subtitle") }}</p>
      <RouterLink to="/services" class="cta-button-home">{{
        t("hero.button")
      }}</RouterLink>
      <!-- Slider -->
      <div class="slider">
        <button @click="currentHeroSlide--" :disabled="currentSlide === 0">
          ‹
        </button>
        <div class="slides">
          <img
            v-for="(image, index) in sliderImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
            :class="{ active: index === currentSlide }"
          />
        </div>
        <button @click="nextHeroSlide">›</button>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about">
      <h2>{{ t("about.title") }}</h2>
      <h3>{{ t("about.missionTitle") }}</h3>
      <p>{{ t("about.missionDescription") }}</p>
      <div class="values">
        <div class="value-card">
          <strong>{{ t("about.values.excellence.title") }}</strong>
          <br />
          <small>{{ t("about.values.excellence.description") }}</small>
        </div>
        <div class="value-card">
          <strong>{{ t("about.values.safety.title") }}</strong>
          <br />
          <small>{{ t("about.values.safety.description") }}</small>
        </div>
        <div class="value-card">
          <strong>{{ t("about.values.reliability.title") }}</strong>
          <br />
          <small>{{ t("about.values.reliability.description") }}</small>
        </div>
        <div class="value-card">
          <strong>{{ t("about.values.innovation.title") }}</strong>
          <br />
          <small>{{ t("about.values.innovation.description") }}</small>
        </div>
      </div>
    </section>

    <!-- Core Competencies Section -->
    <section class="competencies">
      <h2>{{ t("competencies.title") }}</h2>
      <div class="competency-grid">
        <div class="competency-card">
          <h4>{{ t("competencies.items.installation.title") }}</h4>
          <p>{{ t("competencies.items.installation.description") }}</p>
        </div>
        <div class="competency-card">
          <h4>{{ t("competencies.items.maintenance.title") }}</h4>
          <p>{{ t("competencies.items.maintenance.description") }}</p>
        </div>
        <div class="competency-card">
          <h4>{{ t("competencies.items.commercial.title") }}</h4>
          <p>{{ t("competencies.items.commercial.description") }}</p>
        </div>
        <div class="competency-card">
          <h4>{{ t("competencies.items.residential.title") }}</h4>
          <p>{{ t("competencies.items.residential.description") }}</p>
        </div>
        <div class="competency-card">
          <h4>{{ t("competencies.items.power.title") }}</h4>
          <p>{{ t("competencies.items.power.description") }}</p>
        </div>
        <div class="competency-card">
          <h4>{{ t("competencies.items.lighting.title") }}</h4>
          <p>{{ t("competencies.items.lighting.description") }}</p>
        </div>
      </div>
    </section>

    <!-- Title Section -->
    <section class="services-header">
      <h1>{{ t("services.title") }}</h1>
    </section>

    <!-- Services Grid Section -->
    <section class="services-grid">
      <div class="service-card">
        <h2>{{ t("services.items.electrical.title") }}</h2>
        <p>{{ t("services.items.electrical.description") }}</p>
        <RouterLink to="/services/electrical" class="learn-more">
          {{ t("services.learnMore") }} →
        </RouterLink>
      </div>
      <div class="service-card">
        <h2>{{ t("services.items.photovoltaic.title") }}</h2>
        <p>{{ t("services.items.photovoltaic.description") }}</p>
        <RouterLink to="/services/photovoltaic" class="learn-more">
          {{ t("services.learnMore") }} →
        </RouterLink>
      </div>
      <div class="service-card">
        <h2>{{ t("services.items.automation.title") }}</h2>
        <p>{{ t("services.items.automation.description") }}</p>
        <RouterLink to="/services/automation" class="learn-more">
          {{ t("services.learnMore") }} →
        </RouterLink>
      </div>
      <div class="service-card">
        <h2>{{ t("services.items.companies.title") }}</h2>
        <p>{{ t("services.items.companies.description") }}</p>
        <RouterLink to="/services/companies" class="learn-more">
          {{ t("services.learnMore") }} →
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-background-1 {
  background-image: url("../assets/hero-slide/slide_1.jpg");
}

.hero-background-2 {
  background-image: url("../assets/hero-slide/slide_2.jpg");
}

.hero-background-3 {
  background-image: url("../assets/hero-slide/slide_3.jpg");
}

.hero-background-4 {
  background-image: url("../assets/hero-slide/slide_4.jpg");
}

/* General Layout */
.home {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out; /* Smooth background change */
  color: #fff;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
}

.cta-button-home {
  background-color: #ff9b42;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button-home:hover {
  background-color: #e36600;
}

/* Slider */
.slider {
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.slides {
  display: flex;
  overflow: hidden;
  width: 60%;
  max-height: 80px;
}

.slides img {
  width: 100px;
  height: 60px;
  margin: 0 5px;
  opacity: 0.6;
  transition: opacity 0.5s ease-in-out;
}

.slides img.active {
  opacity: 1;
  border: 2px solid #fff;
}

button {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 50%;
}

button:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000;
}

/* About Us Section */
.about {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #828080;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.about p {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #555;
}

.values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.value-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;
}

/* Core Competencies Section */
.competencies {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

.competency-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.competency-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.competency-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.competency-card p {
  font-size: 0.9rem;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  .values,
  .competency-grid {
    grid-template-columns: repeat(1, 1fr); /* One per row on small screens */
  }

  .value-card,
  .competency-card {
    display: flex;
    flex-direction: row; /* Horizontal arrangement */
    align-items: center;
    gap: 1rem; /* Space between elements */
  }

  .value-card strong,
  .competency-card h4 {
    font-size: 1rem;
    margin: 0;
  }

  .value-card small,
  .competency-card p {
    font-size: 0.85rem;
  }
}

@media (min-width: 769px) {
  .values {
    grid-template-columns: repeat(4, 1fr); /* Four per row on larger screens */
  }

  .competency-grid {
    grid-template-columns: repeat(3, 1fr); /* Three per row on larger screens */
  }
}

/* General layout for the services page */
.services {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
}

/* Header section */
.services-header {
  text-align: center;
  margin-bottom: 2rem;
}

.services-header h1 {
  font-size: 2.5rem;
  color: #0c4473;
}

/* Grid layout */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.service-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.service-card h2 {
  font-size: 1.5rem;
  color: #0c4473;
  margin-bottom: 0.5rem;
}

.service-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.learn-more {
  color: #ff7300;
  text-decoration: none;
  font-weight: bold;
}

.learn-more:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
