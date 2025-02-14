<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n();
</script>

<template>
  <div class="services">
    <section class="service-header">
      <img
        src="../assets/services/electrical_systems_private.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("services.title") }}</h1>
      </div>
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
