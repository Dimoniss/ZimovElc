<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, RouterLink } from "vue-router";

const { t, locale } = useI18n();

const isEnglish = ref(locale.value === "en");
const showMenu = ref(false); // Reactive variable for toggling the menu

// Toggle language function
const toggleLanguage = () => {
  if (isEnglish.value) {
    locale.value = "it";
  } else {
    locale.value = "en";
  }
  isEnglish.value = !isEnglish.value;
};

// Function to close the menu after clicking a link
const closeMenu = () => {
  showMenu.value = false;
};
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="navbar">
      <div class="logo">Zimov Electric</div>
      <nav class="nav-links">
        <button
          class="menu-toggle"
          @click="showMenu = !showMenu"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div class="menu" :class="{ active: showMenu }">
          <RouterLink to="/" class="nav-item" @click="closeMenu">{{
            t("nav.home")
          }}</RouterLink>
          <RouterLink to="/services" class="nav-item" @click="closeMenu">{{
            t("nav.services")
          }}</RouterLink>
          <RouterLink to="/portfolio" class="nav-item" @click="closeMenu">{{
            t("nav.portfolio")
          }}</RouterLink>
          <RouterLink to="/contacts" class="nav-item" @click="closeMenu">{{
            t("nav.contacts")
          }}</RouterLink>
        </div>
      </nav>
      <div class="language-switcher">
        <label class="toggle">
          <input
            type="checkbox"
            :checked="isEnglish"
            @change="toggleLanguage"
          />
          <span class="slider"></span>
        </label>
        <span>{{ isEnglish ? "English" : "Italiano" }}</span>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2025 Zimov srl. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0c4473;
  color: #fff;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff7300;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.nav-item:hover {
  color: #ff7300;
}

/* Toggle Button */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 25px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(25px);
}

/* Responsive Menu */
.menu {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.menu.active {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
  }

  .menu.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  nav {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .menu {
    flex-direction: row;
  }

  .menu-toggle {
    display: none;
  }
}
</style>
