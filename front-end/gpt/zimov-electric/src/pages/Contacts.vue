<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const { t } = useI18n(); // Translation function

const form = ref({
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  propertyType: "",
  existingSystem: "",
  certification: "",
  materials: "",
  contactPreference: "",
  details: "",
});

// Опции выбора (на двух языках)
const serviceOptions = computed(() => [
  t("contact.services.installation"),
  t("contact.services.maintenance"),
  t("contact.services.lighting"),
  t("contact.services.automation"),
  t("contact.services.photovoltaic"),
  t("contact.services.chargingStation"),
  t("contact.services.smartHome"),
  t("contact.services.other"),
]);

const propertyOptions = computed(() => [
  t("contact.propertyTypes.apartment"),
  t("contact.propertyTypes.house"),
  t("contact.propertyTypes.condo"),
  t("contact.propertyTypes.office"),
  t("contact.propertyTypes.shop"),
  t("contact.propertyTypes.warehouse"),
  t("contact.propertyTypes.other"),
]);

const existingSystemOptions = computed(() => [
  t("contact.existingSystems.yesUpgrade"),
  t("contact.existingSystems.noNew"),
]);

const certificationOptions = computed(() => [
  t("contact.certifications.electrical"),
  t("contact.certifications.photovoltaic"),
  t("contact.certifications.charging"),
  t("contact.certifications.none"),
]);

const materialsOptions = computed(() => [
  t("contact.materials.own"),
  t("contact.materials.advice"),
]);

const contactPreferenceOptions = computed(() => [
  t("contact.contactPreferences.call"),
  t("contact.contactPreferences.whatsapp"),
  t("contact.contactPreferences.email"),
  t("contact.contactPreferences.morning"),
  t("contact.contactPreferences.afternoon"),
  t("contact.contactPreferences.noPreference"),
]);

const handleSubmit = () => {
  alert(t("contact.successMessage"));
};
</script>

<template>
  <div class="contact-page">
    <section class="service-header">
      <img
        src="../assets/contact_us/contact_us.png"
        alt="Security Services"
        class="header-image"
      />
      <div class="header-content">
        <h1>{{ t("contact.title") }}</h1>
      </div>
    </section>
    <!-- Контейнер формы -->
    <div class="form-container">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <!-- Информация о пользователе -->
        <div class="form-group">
          <label for="name">📝 {{ t("contact.name") }}</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="email">📧 {{ t("contact.email") }}</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="phone">📞 {{ t("contact.phone") }}</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>

        <div class="form-group">
          <label for="location">📍 {{ t("contact.location") }}</label>
          <input type="text" id="location" v-model="form.location" required />
        </div>

        <!-- Выпадающие списки -->
        <div class="form-group">
          <label for="service">📌 {{ t("contact.serviceType") }}</label>
          <select id="service" v-model="form.service">
            <option
              v-for="option in serviceOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="propertyType">🏠 {{ t("contact.propertyType") }}</label>
          <select id="propertyType" v-model="form.propertyType">
            <option
              v-for="option in propertyOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="existingSystem"
            >⚡ {{ t("contact.existingSystem") }}</label
          >
          <select id="existingSystem" v-model="form.existingSystems">
            <option
              v-for="option in existingSystemOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="certification">📜 {{ t("contact.certification") }}</label>
          <select id="certification" v-model="form.certification">
            <option
              v-for="option in certificationOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="materials">🔩 {{ t("contact.material") }}</label>
          <select id="materials" v-model="form.materials">
            <option
              v-for="option in materialsOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="contactPreference"
            >📞 {{ t("contact.contactPreference") }}</label
          >
          <select id="contactPreference" v-model="form.contactPreference">
            <option
              v-for="option in contactPreferenceOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>

        <!-- Поле для дополнительной информации -->
        <div class="form-group">
          <label for="details">💬 {{ t("contact.details") }}</label>
          <textarea id="details" v-model="form.details" rows="4"></textarea>
        </div>

        <!-- Кнопка отправки -->
        <button type="submit" class="submit-button">
          {{ t("contact.button") }}
        </button>
      </form>
    </div>
  </div>
</template>
