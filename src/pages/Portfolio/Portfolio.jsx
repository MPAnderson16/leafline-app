import { ProjectCard } from './ProjectCard'

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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}
