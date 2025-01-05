<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, RouterLink } from "vue-router";

const { t, locale } = useI18n();

const switchLanguage = (lang) => {
  locale.value = lang;
};

const showMenu = ref(false);

const closeMenu = () => {
  showMenu.value = false;
};
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header>
      <nav>
        <button
          class="menu-toggle"
          @click="showMenu = !showMenu"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div class="menu" :class="{ active: showMenu }">
          <RouterLink to="/" @click="closeMenu">{{ t("home") }}</RouterLink>
          <RouterLink to="/services" @click="closeMenu">{{
            t("services")
          }}</RouterLink>
          <RouterLink to="/portfolio" @click="closeMenu">{{
            t("portfolio")
          }}</RouterLink>
          <RouterLink to="/contacts" @click="closeMenu">{{
            t("contacts")
          }}</RouterLink>
        </div>
      </nav>
      <div class="language-switcher">
        <button @click="switchLanguage('en')">English</button>
        <button @click="switchLanguage('it')">Italiano</button>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2025 My Website. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* General styles */
#app {
  font-family: Arial, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #615c5c;
  border-bottom: 1px solid #ddd;
  color: #ffffff;
}

nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
}

nav a:hover {
  color: #ffd700;
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;
  color: #ffffff;
}

.language-switcher button:hover {
  color: #ffd700;
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

/* Main content */
main {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }

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
