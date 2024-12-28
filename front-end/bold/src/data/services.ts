export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Electrical Systems for Private Individuals',
    description: 'Complete electrical solutions for homes including installations, repairs, and upgrades',
    fullDescription: 'Our residential electrical services cover everything from basic wiring to complete home electrical system installations. We ensure your home\'s electrical system is safe, efficient, and up to code.',
    features: [
      'Electrical system installation and upgrades',
      'Circuit breaker panel services',
      'Safety inspections and code compliance',
      'Emergency electrical repairs',
      'Indoor and outdoor lighting installation'
    ],
    image: '/src/assets/images/residential.svg',
    ctaText: 'Schedule a Consultation'
  },
  {
    id: 'solar',
    title: 'Photovoltaic Systems',
    description: 'Sustainable solar power solutions for homes and businesses',
    fullDescription: 'Transform your energy consumption with our state-of-the-art photovoltaic systems. We provide complete solar solutions from design to installation and maintenance.',
    features: [
      'Solar panel installation',
      'System design and planning',
      'Energy consumption analysis',
      'Battery storage solutions',
      'Maintenance and monitoring services'
    ],
    image: '/src/assets/images/solar.svg',
    ctaText: 'Get Solar Estimate'
  },
  {
    id: 'automation',
    title: 'Home Automation',
    description: 'Smart home solutions for modern living',
    fullDescription: 'Make your home smarter with our advanced automation systems. Control lighting, security, climate, and more from your smartphone or tablet.',
    features: [
      'Smart lighting control',
      'Automated security systems',
      'Climate control integration',
      'Voice-controlled systems',
      'Remote monitoring solutions'
    ],
    image: '/src/assets/images/automation.svg',
    ctaText: 'Explore Smart Solutions'
  },
  {
    id: 'commercial',
    title: 'Solutions for Companies',
    description: 'Professional electrical services for businesses and commercial properties',
    fullDescription: 'Comprehensive electrical solutions designed for businesses of all sizes. We ensure your commercial property has reliable, efficient, and scalable electrical systems.',
    features: [
      'Commercial electrical installations',
      'Power distribution systems',
      'Industrial lighting solutions',
      'Emergency backup systems',
      'Energy efficiency consulting'
    ],
    image: '/src/assets/images/commercial.svg',
    ctaText: 'Business Consultation'
  }
];