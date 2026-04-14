import { palette } from '../palette'

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
          <div key={service.id} style={{
            backgroundColor: "#f9f9f9",
            padding:`1px solid ${palette.palePink}`,
            boxShadow: `0 2px 6px ${palette.shadowLight}`,
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = palette.palePink
            e.currentTarget.style.boxShadow = `0 4px 12px ${palette.shadowMedium}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9"
            e.currentTarget.style.boxShadow = `0 2px 6px ${palette.shadowLight}`
            border: "1px solid #e0e0e0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
              {service.title}
            </h3>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              {service.description}
            </p>
            <div style={{ marginBottom: "15px" }}>
              <p style={{ fontWeight: "bold", fontSize: "12px", color: "#333", marginBottom: "10px" }}>
                FEATURES INCLUDED:
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "8px",
                    paddingLeft: "20px",
                    position: "relative"
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      color: "#4caf50"
                    }}>✓</span>palette.softPink,
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              transition: "backgroundColor 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = palette.dustyRose}
            onMouseLeave={(e) => e.target.style.backgroundColor = palette.softPink width: "100%",
              padding: "12px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold"
            }}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
