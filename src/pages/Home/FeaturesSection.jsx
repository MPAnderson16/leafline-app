export const FeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Stunning, modern designs that capture your brand's essence and engage your audience."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Fully responsive designs that look perfect on all devices - phones, tablets, and desktops."
    },
    {
      icon: "⚡",
      title: "Fast & Secure",
      description: "Lightning-fast loading times and enterprise-grade security to protect your business and users."
    },
    {
      icon: "🔍",
      title: "SEO Ready",
      description: "Built-in SEO optimization to help your website rank higher and attract more customers."
    },
    {
      icon: "💬",
      title: "Great Support",
      description: "Ongoing support and maintenance to keep your website running smoothly and up-to-date."
    },
    {
      icon: "💼",
      title: "Professional Service",
      description: "Expert designers and developers dedicated to bringing your vision to life."
    }
  ]

  return (
    <div style={{
      padding: "80px 40px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <h2 style={{
        fontSize: "36px",
        textAlign: "center",
        marginBottom: "60px",
        color: "#333"
      }}>
        Why Choose Leafline?
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px"
      }}>
        {features.map((feature, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{feature.title}</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
