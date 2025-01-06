<script setup>
import { useI18n } from "vue-i18n";
import { RouterView, RouterLink } from "vue-router";

const { t } = useI18n(); // Use the translation function
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{{ t("hero.title") }}</h1>
      <p>{{ t("hero.subtitle") }}</p>
      <RouterLink to="/services" class="cta-button-home">{{
        t("hero.button")
      }}</RouterLink>
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
  </div>
</template>

<style scoped>
/* General Layout */
.home {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #0c4473;
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
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

.cta-button:hover {
  background-color: #e36600;
}

/* About Us Section */
.about {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
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
</style>
