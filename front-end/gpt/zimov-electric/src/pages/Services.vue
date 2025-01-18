<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // Use the translation function
</script>

<template>
  <div class="services">
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
/* General layout for the services page */
.services {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
  padding-top: 70px;
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
