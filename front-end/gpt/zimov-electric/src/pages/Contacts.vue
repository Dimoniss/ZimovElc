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

<style scoped>
.contact-page {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form label {
  font-size: 1rem;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form button {
  padding: 1rem 2rem;
  background-color: #ff7300;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #e36600;
}
</style>
