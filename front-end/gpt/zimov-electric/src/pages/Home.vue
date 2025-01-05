<template>
  <div class="home">
    <h1>Welcome to Home Page</h1>
    <p>This is the main content of the home page.</p>
  </div>
</template>

<style scoped>
/* Ensure the container stretches to full screen */
.home {
  display: flex; /* Use flexbox for alignment */
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  align-items: center; /* Horizontally center content */
  width: 100%; /* Full width */
  height: 100vh; /* Full viewport height */
  background-color: #bebaba; /* Example background color */
  color: #fff; /* Example text color */
  text-align: center; /* Center align text */
}

/* Optional: Style headings and paragraphs */
h1 {
  font-size: 3rem; /* Large heading */
  margin: 0.5rem 0;
}

p {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
</style>
