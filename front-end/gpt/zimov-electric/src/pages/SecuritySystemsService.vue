<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="service-page">
    <!-- Header Section -->
    <section class="service-header">
      <img
        src="../assets/services/security_systems.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("services.items.securitySystems.title") }}</h1>
        <p>{{ t("services.items.securitySystems.description") }}</p>
      </div>
    </section>

    <!-- Security Systems Features -->
    <section class="key-features">
      <div class="features-grid">
        <!-- Alarm Systems -->
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
          <span>{{ t("services.items.securitySystems.alarmSystems") }}</span>
        </div>
        <!-- Surveillance Cameras -->
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
          <span>{{ t("services.items.securitySystems.surveillance") }}</span>
        </div>
        <!-- Fire Detection Systems -->
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
            t("services.items.securitySystems.fireDetectionSystems")
          }}</span>
        </div>
        <!-- Remote Monitoring -->
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
            t("services.items.securitySystems.remoteMonitoring")
          }}</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <RouterLink to="/contacts" class="cta-button">
      {{ t("services.items.securitySystems.cta") }}
    </RouterLink>
  </div>
</template>
