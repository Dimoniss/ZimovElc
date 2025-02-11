<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n();
</script>

<template>
  <div class="services">
    <!-- Header Section -->
    <section class="service-header">
      <h1>{{ t("services.items.special.title") }}</h1>
    </section>

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
  </div>
</template>

<style scoped>
/* General layout for the services page */
.services {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Services Grid */
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
  flex-direction: row-reverse; /* Alternate layout for even cards */
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
    flex-direction: column;
  }

  .service-card:nth-child(even) {
    flex-direction: column; /* Remove reverse layout for small screens */
  }

  .service-image {
    max-width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
