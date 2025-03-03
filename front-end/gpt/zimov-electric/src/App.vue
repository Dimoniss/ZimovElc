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
      <RouterLink to="/" class="logo-placeholder" @click="closeMenu">
        LOGO
      </RouterLink>
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
                  to="/services/telecommunications"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.telecommunications") }}
                </RouterLink>
                <RouterLink
                  to="/services/securitySystems"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.securitySystems") }}
                </RouterLink>
                <RouterLink
                  to="/services/specialServices"
                  class="dropdown-item"
                  :class="{ 'scrolled-item': isScrolled }"
                  @click="closeMenu"
                >
                  {{ t("nav.servicesItems.specialServices") }}
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
        <button
          class="lang-button"
          @click="toggleLanguage"
          :class="{ english: isEnglish }"
        ></button>
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
  text-align: left;
}

.navbar-scrolled {
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .nav-item {
  color: #000000; /* text color when scrolled */
  text-align: left;
}

.navbar-scrolled .nav-item:hover {
  color: #0c4473; /* text color on hover when scrolled */
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
  transition: color 0.4s ease; /* Transition for smooth color change */
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
.lang-button {
  width: 40px;
  height: 25px;
  border: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-image 0.3s ease-in-out;
  background-image: url("../src/assets/header/flags/it.svg");
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.7);
  outline: none;
  border-radius: 2px;
}

/* White background for the English flag */
.lang-button.english {
  background-image: url("../src/assets/header/flags/gb.svg");
}

.language-switcher {
  display: flex;
  padding: 0 3rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between elements */
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
