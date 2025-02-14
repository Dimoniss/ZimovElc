<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // Translation function

const handleSubmit = () => {
  alert(t("contact.successMessage"));
};
</script>

<template>
  <div class="contact-page">
    <h2>{{ t("contact.title") }}</h2>
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
