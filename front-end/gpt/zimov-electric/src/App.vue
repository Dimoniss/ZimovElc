<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, RouterLink } from "vue-router";

const { t, locale } = useI18n();

const isEnglish = ref(locale.value === "en");
const showMenu = ref(false); // Reactive variable for toggling the menu
const showServicesDropdown = ref(false); // For the "Services" dropdown
const isScrolled = ref(false);

// Add scroll listener to detect scrolling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Attach and detach event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
  showServicesDropdown.value = false; // Close dropdown when menu is closed
};
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header :class="['navbar', { 'navbar-scrolled': isScrolled }]">
      <div class="logo-placeholder">LOGO</div>
      <div class="navbar-left">
        <nav class="nav-links">
          <button
            class="menu-toggle"
            @click="showMenu = !showMenu"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <div class="menu" :class="{ active: showMenu }">
            <RouterLink
              to="/"
              class="nav-item"
              :class="{ 'scrolled-item': isScrolled }"
              @click="closeMenu"
              >{{ t("nav.home") }}</RouterLink
            >
            <div
              class="nav-item dropdown"
              @mouseenter="showServicesDropdown = true"
              @mouseleave="showServicesDropdown = false"
            >
              <RouterLink
                to="/services"
                class="nav-item"
                :class="{ 'scrolled-item': isScrolled }"
                @click="closeMenu"
                >{{ t("nav.services") }}</RouterLink
              >
              <div class="dropdown-menu" v-if="showServicesDropdown">
                <RouterLink
                  to="/services/electrical"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.electrical") }}
                </RouterLink>
                <RouterLink
                  to="/services/photovoltaic"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.photovoltaic") }}
                </RouterLink>
                <RouterLink
                  to="/services/automation"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.automation") }}
                </RouterLink>
                <RouterLink
                  to="/services/companies"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.companies") }}
                </RouterLink>
              </div>
            </div>
            <!--           <RouterLink to="/portfolio" class="nav-item" :class="{ 'scrolled-item': isScrolled }" @click="closeMenu">{{
            t("nav.portfolio")
          }}</RouterLink> -->
            <RouterLink
              to="/contacts"
              class="nav-item"
              :class="{ 'scrolled-item': isScrolled }"
              @click="closeMenu"
              >{{ t("nav.contacts") }}</RouterLink
            >
          </div>
        </nav>
      </div>

      <div class="language-switcher">
        <span class="lang-label">IT</span>
        <label class="toggle">
          <input
            type="checkbox"
            :checked="isEnglish"
            @change="toggleLanguage"
          />
          <span class="slider"></span>
        </label>
        <span class="lang-label">ENG</span>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2025 Eslink. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Navbar Styles */
.navbar {
  position: fixed; /* Fix the navbar at the top of the viewport */
  top: 0; /* Align it to the top */
  left: 0; /* Align it to the left */
  width: 100%; /* Make it span the full width of the viewport */
  height: 110px;
  z-index: 1000; /* Ensure it stays above other elements */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  transition: background-color 0.4s ease;
  text-shadow: 0px 2px 3px rgba(105, 104, 104, 0.7);
}

.navbar-scrolled {
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);
}

.navbar-scrolled .nav-item {
  color: #000000; /* Цвет текста при скролле */
}

.navbar-scrolled .nav-item:hover {
  color: #0c4473; /* Цвет текста при наведении, если скролл активен */
}

/* Logo Placeholder */
.logo-placeholder {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff7300; /* Placeholder color */
  cursor: pointer;
  margin: 3rem;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 2rem; /* Space between logo and menu */
  margin: 3rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  color: #ffffff;
  transition: color 0.4s ease; /* Плавный переход цвета */
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1.3rem;
  font-weight: 700;
}

.nav-item:hover {
  color: #000000; /* Change color on hover */
}

/* Dropdown Menu */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: #000; /* Default dropdown item color */
  font-weight: 450;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f4f4f4;
  color: #0c4473; /* Change color on hover */
}

/* Language Switcher */
.language-switcher {
  display: flex;
  padding: 0 3rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between elements */
}

.lang-label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff7300; /* White text for contrast */
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
  background-color: #ff7300; /* Default background color */
  border-radius: 25px; /* Rounded edges */
  transition: 0.4s;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.7);
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 3px;
  bottom: 3px;
  background-color: #000; /* Default circle color */
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3; /* Background color when active */
}

input:checked + .slider:before {
  transform: translateX(25px); /* Move the circle to the right */
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
