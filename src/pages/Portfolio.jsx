import { palette } from '../palette'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Eco Coffee Shop Website",
      description: "Modern, responsive website for a sustainable coffee shop with menu integration and online ordering.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Coffee+Shop+Website"
    },
    {
      id: 2,
      title: "Wellness Center Redesign",
      description: "Complete website redesign for a health and wellness center. Focus on user experience and appointment booking.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Wellness+Center"
    },
    {
      id: 3,
      title: "Local Bakery E-Commerce",
      description: "E-commerce website for a local bakery with product catalog, shopping cart, and delivery options.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Bakery+Store"
    },
    {
      id: 4,
      title: "Yoga Studio Portal",
      description: "Custom website for yoga studio with class schedule, instructor profiles, and membership management.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Yoga+Studio"
    },
    {
      id: 5,
      title: "Tech Startup Landing Page",
      description: "Eye-catching landing page for a tech startup with animated features and conversion optimization.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Tech+Startup"
    },
    {
      id: 6,
      title: "Boutique Hotel Website",
      description: "Elegant website for a boutique hotel with photo gallery, reservation system, and location mapping.",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300?text=Boutique+Hotel"
    }
  ]

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Portfolio</h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
        Explore my recent web design projects. Each one combines beautiful design with functional user experiences.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "30px"
      }}>
        {projects.map(project => (
          <div key={project.id} style={{
            border: `2px solid ${palette.lightPink}`,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: `0 4px 12px ${palette.shadowLight}`,
            transition: "transform 0.3s ease, boxShadow 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)"
            e.currentTarget.style.boxShadow = `0 8px 20px ${palette.softPink}40`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = `0 4px 12px ${palette.shadowLight}`
          }}>
            <img 
              src={project.image} 
              alt={project.title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <span style={{
                display: "inline-block",
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
                padding: "5px 10px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}>
                {project.category}
              </span>
              <h3 style={{ margin: "10px 0", fontSize: "20px" }}>{project.title}</h3>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>
                {project.description}
              </p>
              <button style={{
                marginTop: "15px",
                padding: "8px 16px",
                backgroundColor: palette.softPink,
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "backgroundColor 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = palette.dustyRose}
              onMouseLeave={(e) => e.target.style.backgroundColor = palette.softPink}>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
