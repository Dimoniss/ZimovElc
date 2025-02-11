<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="service-page">
    <!-- Header Section -->
    <section class="service-header">
      <img
        src="../assets/services/electrical_systems_private.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("services.items.securitySystems.title") }}</h1>
        <p>{{ t("services.items.securitySystems.description") }}</p>
      </div>
    </section>

    <!-- Residential Electrical Systems -->
    <section class="key-features">
      <h2>{{ t("services.items.electrical.civili.title") }}</h2>
      <div class="features-grid">
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
            t("services.items.electrical.civili.designAndInstall")
          }}</span>
        </div>
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
            t("services.items.electrical.civili.electricalPanels")
          }}</span>
        </div>
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
            t("services.items.electrical.civili.renewableEnergySystems")
          }}</span>
        </div>
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
            t("services.items.electrical.civili.automationPanel")
          }}</span>
        </div>
      </div>
    </section>

    <!-- Industrial Electrical Systems -->
    <section class="key-features">
      <h2>{{ t("services.items.electrical.industrial.title") }}</h2>
      <div class="features-grid">
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
            t("services.items.electrical.industrial.designAndInstall")
          }}</span>
        </div>
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
            t("services.items.electrical.industrial.lightPoints")
          }}</span>
        </div>
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
            t("services.items.electrical.industrial.industrialSystems")
          }}</span>
        </div>
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
            t("services.items.electrical.industrial.electricalSafety")
          }}</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <RouterLink to="/contacts" class="cta-button">
      {{ t("services.items.electrical.cta") }}
    </RouterLink>
  </div>
</template>
