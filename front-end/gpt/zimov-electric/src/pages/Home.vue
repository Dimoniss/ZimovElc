<script setup>
import { ref, onMounted, computed } from "vue";
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

const form = ref({
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  propertyType: "",
  existingSystem: "",
  certification: "",
  materials: "",
  contactPreference: "",
  details: "",
});

// Options for dropdowns
const serviceOptions = computed(() => [
  t("contact.services.installation"),
  t("contact.services.maintenance"),
  t("contact.services.lighting"),
  t("contact.services.automation"),
  t("contact.services.photovoltaic"),
  t("contact.services.chargingStation"),
  t("contact.services.smartHome"),
  t("contact.services.other"),
]);

const propertyOptions = computed(() => [
  t("contact.propertyTypes.apartment"),
  t("contact.propertyTypes.house"),
  t("contact.propertyTypes.condo"),
  t("contact.propertyTypes.office"),
  t("contact.propertyTypes.shop"),
  t("contact.propertyTypes.warehouse"),
  t("contact.propertyTypes.other"),
]);

const existingSystemOptions = computed(() => [
  t("contact.existingSystems.yesUpgrade"),
  t("contact.existingSystems.noNew"),
]);

const certificationOptions = computed(() => [
  t("contact.certifications.electrical"),
  t("contact.certifications.photovoltaic"),
  t("contact.certifications.charging"),
  t("contact.certifications.none"),
]);

const materialsOptions = computed(() => [
  t("contact.materials.own"),
  t("contact.materials.advice"),
]);

const contactPreferenceOptions = computed(() => [
  t("contact.contactPreferences.call"),
  t("contact.contactPreferences.whatsapp"),
  t("contact.contactPreferences.email"),
  t("contact.contactPreferences.morning"),
  t("contact.contactPreferences.afternoon"),
  t("contact.contactPreferences.noPreference"),
]);

const handleSubmit = () => {
  alert(t("contact.successMessage"));
};

const materialLogos = ref([]);
const loadLogos = async () => {
  const logoFiles = import.meta.glob(
    "../assets/materials/all-logo/*.{png,jpg,jpeg,svg}"
  );
  const logoPaths = [];

  for (const path in logoFiles) {
    const module = await logoFiles[path]();
    logoPaths.push(module.default);
  }

  materialLogos.value = logoPaths;
};
onMounted(() => {
  loadLogos();
});
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero" :class="`hero-background-${currentSlide + 1}`">
      <h1>{{ t("hero.title") }}</h1>
      <p>{{ t("hero.subtitle") }}</p>
      <p>{{ t("hero.description") }}</p>
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
      <h1>{{ t("about.title") }}</h1>
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
        <div class="value-card">
          <div class="value-text">
            <strong>{{ t("about.values.professionalism.title") }}</strong>
            <p>{{ t("about.values.professionalism.description") }}</p>
          </div>
          <img
            src="../assets/about_us/professionalism.png"
            alt="Professionalism"
            class="value-image"
          />
        </div>
      </div>
    </section>

    <!-- Core Competencies Section -->
    <section class="competencies">
      <h1>{{ t("competencies.title") }}</h1>
      <div class="competency-grid">
        <div class="competency-card">
          <img
            src="../assets/competencies/installation.png"
            alt="Installation"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.installation.title") }}</h3>
          <p>{{ t("competencies.items.installation.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/maintenance.png"
            alt="Maintenance"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.maintenance.title") }}</h3>
          <p>{{ t("competencies.items.maintenance.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/commercial.png"
            alt="Commercial"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.commercial.title") }}</h3>
          <p>{{ t("competencies.items.commercial.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/residential.png"
            alt="Residential"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.residential.title") }}</h3>
          <p>{{ t("competencies.items.residential.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/power_system.png"
            alt="Power"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.power.title") }}</h3>
          <p>{{ t("competencies.items.power.description") }}</p>
        </div>
        <div class="competency-card">
          <img
            src="../assets/competencies/lighting.png"
            alt="Lighting"
            class="competency-image"
          />
          <h3>{{ t("competencies.items.lighting.title") }}</h3>
          <p>{{ t("competencies.items.lighting.description") }}</p>
        </div>
      </div>
    </section>

    <!-- Materials Logos Section -->
    <section class="materials-logos">
      <h1>{{ t("materials.title") }}</h1>
      <div class="logos-grid">
        <img
          v-for="(logo, index) in materialLogos"
          :key="index"
          :src="logo"
          alt="Material Logo"
          class="logo-image"
        />
      </div>
    </section>

    <!-- Title Section -->
    <section class="services-header">
      <h1>{{ t("services.title") }}</h1>
    </section>

    <!-- Services Grid Section -->
    <!-- Services Grid -->
    <section class="services-grid">
      <!-- Electrical Works -->
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
          alt="Electrical Works"
          class="service-image"
        />
      </div>

      <!-- Telecommunications -->
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.telecommunications.title") }}</h2>
          <p>{{ t("services.items.telecommunications.description") }}</p>
          <RouterLink to="/services/telecommunications" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/telecommunications.png"
          alt="Telecommunications"
          class="service-image"
        />
      </div>

      <!-- Security Systems -->
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.securitySystems.title") }}</h2>
          <p>{{ t("services.items.securitySystems.description") }}</p>
          <RouterLink to="/services/securitySystems" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/security_systems.png"
          alt="Security Systems"
          class="service-image"
        />
      </div>

      <!-- Special Services -->
      <div class="service-card">
        <div class="service-text">
          <h2>{{ t("services.items.special.title") }}</h2>
          <p>{{ t("services.items.special.description") }}</p>
          <RouterLink to="/services/specialServices" class="learn-more">
            {{ t("services.learnMore") }} →
          </RouterLink>
        </div>
        <img
          src="../assets/services/special_services.png"
          alt="Special Services"
          class="service-image"
        />
      </div>
    </section>

    <!-- Contacts Section -->
    <div class="contact-page">
      <h1>{{ t("contact.title") }}</h1>
      <div class="form-container">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <!-- Информация о пользователе -->
          <div class="form-group">
            <label for="name">📝 {{ t("contact.name") }}</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">📧 {{ t("contact.email") }}</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="phone">📞 {{ t("contact.phone") }}</label>
            <input type="tel" id="phone" v-model="form.phone" required />
          </div>

          <div class="form-group">
            <label for="location">📍 {{ t("contact.location") }}</label>
            <input type="text" id="location" v-model="form.location" required />
          </div>

          <!-- Выпадающие списки -->
          <div class="form-group">
            <label for="service">📌 {{ t("contact.serviceType") }}</label>
            <select id="service" v-model="form.service">
              <option
                v-for="option in serviceOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="propertyType">🏠 {{ t("contact.propertyType") }}</label>
            <select id="propertyType" v-model="form.propertyType">
              <option
                v-for="option in propertyOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="existingSystem"
              >⚡ {{ t("contact.existingSystem") }}</label
            >
            <select id="existingSystem" v-model="form.existingSystems">
              <option
                v-for="option in existingSystemOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="certification"
              >📜 {{ t("contact.certification") }}</label
            >
            <select id="certification" v-model="form.certification">
              <option
                v-for="option in certificationOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="materials">🔩 {{ t("contact.material") }}</label>
            <select id="materials" v-model="form.materials">
              <option
                v-for="option in materialsOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="contactPreference"
              >📞 {{ t("contact.contactPreference") }}</label
            >
            <select id="contactPreference" v-model="form.contactPreference">
              <option
                v-for="option in contactPreferenceOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <!-- Поле для дополнительной информации -->
          <div class="form-group">
            <label for="details">💬 {{ t("contact.details") }}</label>
            <textarea id="details" v-model="form.details" rows="4"></textarea>
          </div>

          <!-- Кнопка отправки -->
          <button type="submit" class="submit-button">
            {{ t("contact.button") }}
          </button>
        </form>
      </div>
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
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
  color: #fff;
}

.hero p {
  font-size: 1.5rem;
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

/* About Us Section */
.about {
  padding: 2rem 0;
  background-color: #ffffff;
  text-align: center;
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
  height: 55vh;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
}

.value-card:nth-child(even) {
  flex-direction: row-reverse; /* Reverse layout for even cards */
}

.value-text {
  width: 50%; /* Text takes half the width */
  padding: 2rem;
  text-align: left;
}

.value-text strong {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.value-image {
  width: 50%; /* Photo takes half the width */
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
  .value-card {
    flex-direction: column; /* Vertical layout for smaller screens */
    height: auto;
  }

  .value-card:nth-child(even) {
    flex-direction: column; /* Reverse layout for even cards */
  }

  .value-text,
  .value-image {
    width: 100%; /* Elements take full width */
  }

  .value-image {
    height: auto;
  }

  .value-text {
    text-align: center; /* Text is centered */
    padding: 1rem;
  }
}

/* Core Competencies Section */
.competencies {
  padding: 2rem 2rem;
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
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 5%;
}

.competency-card p {
  font-size: 1.4rem;
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
/* General layout for the services page */
.services {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
}

/* Header Section */
.services-header {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
