<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n();
</script>

<template>
  <div class="service-page">
    <!-- Header Section -->
    <section class="service-header">
      <img
        src="../assets/services/special_services.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("services.items.special.title") }}</h1>
        <p>{{ t("services.items.special.description") }}</p>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="key-features">
      <div class="features-grid">
        <!-- Feature 1: Renewable Energy Systems -->
        <div class="feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75L9 17.25L19.5 6.75"
            />
          </svg>
          <span>{{
            t("services.items.special.renewableEnergySystems.description")
          }}</span>
        </div>

        <!-- Feature 2: Smart Home Automation -->
        <div class="feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75L9 17.25L19.5 6.75"
            />
          </svg>
          <span>{{ t("services.items.special.smartHome.description") }}</span>
        </div>

        <!-- Feature 3: Advanced Maintenance & Diagnostics -->
        <div class="feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75L9 17.25L19.5 6.75"
            />
          </svg>
          <span>{{
            t("services.items.special.maintenanceAndDiagnostics.description")
          }}</span>
        </div>

        <!-- Feature 4: EV Charging Infrastructure -->
        <div class="feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75L9 17.25L19.5 6.75"
            />
          </svg>
          <span>{{
            t("services.items.special.chargingInfrastructure.description")
          }}</span>
        </div>

        <!-- Feature 5: Creative & LED Lighting -->
        <div class="feature-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75L9 17.25L19.5 6.75"
            />
          </svg>
          <span>{{ t("services.items.special.lighting.description") }}</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <RouterLink to="/contacts" class="cta-button">
      {{ t("services.learnMore") }}
    </RouterLink>
  </div>
</template>
