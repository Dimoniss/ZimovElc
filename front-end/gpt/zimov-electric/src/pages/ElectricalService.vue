<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="service-page">
    <!-- Header Section -->
    <section class="service-header">
      <h1>{{ t("services.electrical.title") }}</h1>
      <p>{{ t("services.electrical.description") }}</p>
    </section>

    <!-- Key Features Section -->
    <section class="key-features">
      <h2>{{ t("services.keyFeatures") }}</h2>
      <div class="features-grid">
        <!-- First Feature -->
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
          <span>{{ t("services.electrical.features.0") }}</span>
        </div>

        <!-- Second Feature -->
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
          <span>{{ t("services.electrical.features.1") }}</span>
        </div>

        <!-- Third Feature -->
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
          <span>{{ t("services.electrical.features.2") }}</span>
        </div>

        <!-- Fourth Feature -->
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
          <span>{{ t("services.electrical.features.3") }}</span>
        </div>

        <!-- Fifth Feature -->
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
          <span>{{ t("services.electrical.features.4") }}</span>
        </div>

        <!-- Sixth Feature -->
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
          <span>{{ t("services.electrical.features.5") }}</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <RouterLink to="/contact" class="cta-button">
      {{ t("services.electrical.cta") }}
    </RouterLink>
  </div>
</template>

<style scoped>
/* Grid Layout for Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Two items per row on larger screens */
  gap: 1.5rem; /* Spacing between items */
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr; /* One item per row on smaller screens */
  }
}

/* Feature Item Styling */
.feature-item {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem; /* Space between icon and text */
}

.feature-item svg {
  color: #ff7300;
  width: 24px;
  height: 24px;
}

/* CTA Button Styling */
.cta-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #ff7300;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e36600;
}
</style>
