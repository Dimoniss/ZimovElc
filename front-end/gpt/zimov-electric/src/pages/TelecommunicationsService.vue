<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="service-page">
    <!-- Header Section -->
    <section class="service-header">
      <img
        src="../assets/services/telecommunications.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("services.items.telecommunications.title") }}</h1>
        <p>{{ t("services.items.telecommunications.description") }}</p>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="key-features">
      <div class="features-grid">
        <!-- Design and Installation -->
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
            t("services.items.telecommunications.designAndInstall")
          }}</span>
        </div>

        <!-- Wireless Networks -->
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
            t("services.items.telecommunications.wirelessNetworks")
          }}</span>
        </div>

        <!-- Fiber Optic Networks -->
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
          <span>{{ t("services.items.telecommunications.fiberOptic") }}</span>
        </div>

        <!-- Starlink Installation -->
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
          <span>{{ t("services.items.telecommunications.starLink") }}</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <RouterLink to="/contacts" class="cta-button">
      {{ t("services.items.telecommunications.cta") }}
    </RouterLink>
  </div>
</template>
