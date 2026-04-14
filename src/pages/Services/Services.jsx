import { ServiceCard } from './ServiceCard'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Website Design & Development",
      description: "Custom, responsive websites built with modern technologies. Fully optimized for desktop, tablet, and mobile devices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Times", "Mobile-First Approach"]
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description: "Build your online store with secure payment integration, product management, and inventory tracking.",
      features: ["Shopping Cart Setup", "Payment Integration", "Product Management", "Order Tracking"]
    },
    {
      id: 3,
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive sales for your campaigns.",
      features: ["Conversion Optimization", "Animated Elements", "A/B Testing Ready", "Analytics Integration"]
    },
    {
      id: 4,
      title: "Website Redesign",
      description: "Modernize your existing website with improved design, functionality, and user experience.",
      features: ["UI/UX Improvement", "Performance Optimization", "Content Migration", "SEO Enhancement"]
    },
    {
      id: 5,
      title: "Web App Development",
      description: "Interactive web applications with real-time data, user authentication, and database integration.",
      features: ["Backend Integration", "User Authentication", "Real-Time Updates", "Database Design"]
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support for your website including updates, security patches, and performance monitoring.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"]
    }
  ]

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Services</h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
        Comprehensive web design and development services tailored to help your business grow online.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "30px"
      }}>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </div>
  )
}
