<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // Translation function

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
    <form class="contact-form" @submit.prevent="handleSubmit">
      <label for="name">{{ t("contact.name") }}</label>
      <input type="text" id="name" name="name" required />

      <label for="email">{{ t("contact.email") }}</label>
      <input type="email" id="email" name="email" required />

      <label for="message">{{ t("contact.message") }}</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">{{ t("contact.button") }}</button>
    </form>
  </div>
</template>
