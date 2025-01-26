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
  { src: heroBackground1, text: "Slide 1" },
  { src: heroBackground2, text: "Slide 2" },
  { src: heroBackground3, text: "Slide 3" },
  { src: heroBackground4, text: "Slide 4" },
]);

const currentSlide = ref(0); // Current slide index
const backgroundImage = ref(sliderImages.value[0]); // Initial background image

// function to change to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length;
  backgroundImage.value = sliderImages.value[currentSlide.value];
};

// function to change to previous slide
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + sliderImages.value.length) %
    sliderImages.value.length;
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
        <button class="slider-button left" @click="prevSlide">‹</button>
        <div class="slides">
          <img
            v-for="(slide, index) in sliderImages"
            :key="index"
            :src="slide.src"
            :alt="'Slide ' + (index + 1)"
            :class="{ active: index === currentSlide }"
          />
        </div>
        <button class="slider-button right" @click="nextSlide">›</button>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about">
      <h2>{{ t("about.title") }}</h2>
      <div class="values">
        <div class="value-card">
          <div class="value-text">
            <strong>{{ t("about.values.excellence.title") }}</strong>
            <p>{{ t("about.values.excellence.description") }}</p>
          </div>
          <img
            src="../assets/about_us/excellence.png"
            alt="Excellence"
            class="value-image"
          />
        </div>
        <div class="value-card">
          <div class="value-text">
            <strong>{{ t("about.values.safety.title") }}</strong>
            <p>{{ t("about.values.safety.description") }}</p>
          </div>
          <img
            src="../assets/about_us/safety.png"
            alt="Safety"
            class="value-image"
          />
        </div>
        <div class="value-card">
          <div class="value-text">
            <strong>{{ t("about.values.reliability.title") }}</strong>
            <p>{{ t("about.values.reliability.description") }}</p>
          </div>
          <img
            src="../assets/about_us/reliability.png"
            alt="Reliability"
            class="value-image"
          />
        </div>
        <div class="value-card">
          <div class="value-text">
            <strong>{{ t("about.values.innovation.title") }}</strong>
            <p>{{ t("about.values.innovation.description") }}</p>
          </div>
          <img
            src="../assets/about_us/innovation.png"
            alt="Innovation"
            class="value-image"
          />
        </div>
      </div>
    </section>

    <!-- Core Competencies Section -->
    <section class="competencies">
      <h2>{{ t("competencies.title") }}</h2>
      <div class="competency-grid">
        <div class="competency-card">
          <img
            src="../assets/competencies/installation.png"
            alt="Installation"
            class="competency-image"
          />
          <h4>{{ t("competencies.items.installation.title") }}</h4>
          <p>{{ t("competencies.items.installation.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/maintenance.png"
            alt="Maintenance"
            class="competency-image"
          />
          <h4>{{ t("competencies.items.maintenance.title") }}</h4>
          <p>{{ t("competencies.items.maintenance.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/commercial.png"
            alt="Commercial"
            class="competency-image"
          />
          <h4>{{ t("competencies.items.commercial.title") }}</h4>
          <p>{{ t("competencies.items.commercial.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/residential.png"
            alt="Residential"
            class="competency-image"
          />
          <h4>{{ t("competencies.items.residential.title") }}</h4>
          <p>{{ t("competencies.items.residential.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/power_system.png"
            alt="Power"
            class="competency-image"
          />
          <h4>{{ t("competencies.items.power.title") }}</h4>
          <p>{{ t("competencies.items.power.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/lighting.png"
            alt="Lighting"
            class="competency-image"
          />
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
        <div class="service-text">
          <h2>{{ t("services.items.electrical.title") }}</h2>
          <p>{{ t("services.items.electrical.description") }}</p>
          <RouterLink to="/services/electrical" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/electrical_systems_private.png"
          alt="Electrical"
          class="service-image"
        />
      </div>
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.photovoltaic.title") }}</h2>
          <p>{{ t("services.items.photovoltaic.description") }}</p>
          <RouterLink to="/services/photovoltaic" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/photovoltaic_systems.png"
          alt="Photovoltaic"
          class="service-image"
        />
      </div>
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.automation.title") }}</h2>
          <p>{{ t("services.items.automation.description") }}</p>
          <RouterLink to="/services/automation" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/home_automation.png"
          alt="Automation"
          class="service-image"
        />
      </div>
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.companies.title") }}</h2>
          <p>{{ t("services.items.companies.description") }}</p>
          <RouterLink to="/services/companies" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/solutions_for_cpmpanies.png"
          alt="Companies"
          class="service-image"
        />
      </div>
    </section>

    <!-- Сщтефсеы Section -->
    <div class="contact-page">
      <h2>{{ t("contact.title") }}</h2>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <label for="name">{{ t("contact.name") }}</label>
        <input type="text" id="name" name="name" required />

        <label for="email">{{ t("contact.email") }}</label>
        <input type="email" id="email" name="email" required />

        <label for="message">{{ t("contact.message") }}</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">{{ t("contact.button") }}</button>
      </form>
    </div>
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
  min-height: 800px;
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
  background-color: #ff7300;
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
  height: 170px;
}

.slides {
  display: flex;
  overflow: hidden;
  width: 60%;
  max-height: 160px;
}

.slides img {
  width: 200px;
  height: 150px;
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
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 2rem;
}

button:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000;
}

/* About Us Section */
.about {
  padding: 4rem 0;
  background-color: #ffffff;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Values Section */
.values {
  display: flex;
  flex-direction: column;
}

.value-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35vh; /* Высота на весь экран */
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
}

.value-card:nth-child(even) {
  flex-direction: row-reverse; /* Чередуем порядок для четных карточек */
}

.value-text {
  width: 50%; /* Текст занимает половину экрана */
  padding: 2rem;
  text-align: left;
}

.value-text strong {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.value-text p {
  font-size: 1.2rem;
  color: #555;
}

.value-image {
  width: 50%; /* Картинка занимает половину экрана */
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Адаптивность */
@media (max-width: 768px) {
  .value-card {
    flex-direction: column; /* Вертикальная структура на мобильных устройствах */
    height: auto;
  }

  .value-card:nth-child(even) {
    flex-direction: column; /* Убираем реверс для мобильной версии */
  }

  .value-text,
  .value-image {
    width: 100%; /* Элементы занимают всю ширину */
  }

  .value-image {
    height: auto;
  }

  .value-text {
    text-align: center; /* Текст по центру на мобильных устройствах */
    padding: 1rem;
  }
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
  background-color: #eeeeee;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.competency-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 5%;
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

/* Grid layout */
.services-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.service-card:nth-child(even) {
  flex-direction: row-reverse; /* Чередуем расположение картинки */
}

.service-text {
  flex: 1;
  padding: 1rem;
}

.service-text h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #0c4473;
}

.service-text p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.5;
}

.service-text .learn-more {
  color: #ff7300;
  text-decoration: none;
  font-weight: bold;
}

.service-text .learn-more:hover {
  text-decoration: underline;
}

.service-image {
  flex: 1;
  max-width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .service-card {
    flex-direction: column; /* Вертикальное размещение */
  }

  .service-card:nth-child(even) {
    flex-direction: column; /* Убираем реверс */
  }

  .service-image {
    max-width: 100%; /* Изображение на всю ширину */
    margin-bottom: 1rem;
  }
}

/* Contacts Page Design */
.contact-page {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
  padding-top: 70px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form label {
  font-size: 1rem;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form button {
  padding: 1rem 2rem;
  background-color: #ff7300;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #e36600;
}
</style>
