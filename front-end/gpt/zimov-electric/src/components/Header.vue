<template>
  <header>
    <nav>
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/services">{{ $t("services") }}</router-link>
      <router-link to="/portfolio">{{ $t("portfolio") }}</router-link>
      <router-link to="/contacts">{{ $t("contacts") }}</router-link>
    </nav>
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('it')">Italiano</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
