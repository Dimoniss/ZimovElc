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

.services h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Header section */
.services-header {
  text-align: center;
  margin-bottom: 2rem;
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
</style>
