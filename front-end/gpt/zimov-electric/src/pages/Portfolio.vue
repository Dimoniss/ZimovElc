<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n(); // Translation function
</script>

<template>
  <div class="portfolio-page">
    <h2>{{ t("portfolio.title") }}</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>{{ t("portfolio.projects.office.title") }}</h3>
        <p>{{ t("portfolio.projects.office.description") }}</p>
        <RouterLink to="/portfolio/modern-office-building"
          >{{ t("portfolio.learnMore") }} →</RouterLink
        >
      </div>
      <div class="project-card">
        <h3>{{ t("portfolio.projects.smartHome.title") }}</h3>
        <p>{{ t("portfolio.projects.smartHome.description") }}</p>
        <RouterLink to="/portfolio/smart-home-integration"
          >{{ t("portfolio.learnMore") }} →</RouterLink
        >
      </div>
      <div class="project-card">
        <h3>{{ t("portfolio.projects.industrial.title") }}</h3>
        <p>{{ t("portfolio.projects.industrial.description") }}</p>
        <RouterLink to="/portfolio/industrial-facility"
          >{{ t("portfolio.learnMore") }} →</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-page {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.project-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.project-card p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.project-card a {
  color: #ff7300;
  text-decoration: none;
  font-weight: bold;
}

.project-card a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
}
</style>
