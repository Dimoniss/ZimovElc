<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Professional Electrical Services</h1>
      <p>
        Expert electrical solutions for residential and commercial properties
      </p>
      <button class="cta-button">View Our Services</button>
    </section>

    <!-- About Us Section -->
    <section class="about">
      <h2>About Us</h2>
      <h3>Our Mission</h3>
      <p>
        To provide exceptional electrical services with the highest standards of
        safety, quality, and customer satisfaction.
      </p>
      <div class="values">
        <div class="value-card">
          Excellence<br /><small
            >Delivering superior quality in every project</small
          >
        </div>
        <div class="value-card">
          Safety<br /><small>Maintaining the highest safety standards</small>
        </div>
        <div class="value-card">
          Reliability<br /><small
            >Consistent and dependable service delivery</small
          >
        </div>
        <div class="value-card">
          Innovation<br /><small>Embracing modern electrical solutions</small>
        </div>
      </div>
    </section>

    <!-- Core Competencies Section -->
    <section class="competencies">
      <h2>Core Competencies</h2>
      <div class="competency-grid">
        <div class="competency-card">
          <h4>Electrical Installation</h4>
          <p>
            Professional installation services for residential and commercial
            properties
          </p>
        </div>
        <div class="competency-card">
          <h4>Maintenance & Repairs</h4>
          <p>Regular maintenance and emergency repair services</p>
        </div>
        <div class="competency-card">
          <h4>Commercial Services</h4>
          <p>Specialized solutions for businesses and industrial facilities</p>
        </div>
        <div class="competency-card">
          <h4>Residential Services</h4>
          <p>Complete electrical solutions for homes and apartments</p>
        </div>
        <div class="competency-card">
          <h4>Power Systems</h4>
          <p>Installation and maintenance of power distribution systems</p>
        </div>
        <div class="competency-card">
          <h4>Lighting Solutions</h4>
          <p>Modern lighting installation and energy-efficient upgrades</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* General Layout */
.home {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #0c4473;
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #ff7300;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e36600;
}

/* About Us Section */
.about {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.about p {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #555;
}

.values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.value-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;
}

/* Core Competencies Section */
.competencies {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

.competency-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.competency-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.competency-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.competency-card p {
  font-size: 0.9rem;
  color: #555;
}
</style>
