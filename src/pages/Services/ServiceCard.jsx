import { palette } from '../../palette'

export const ServiceCard = ({ title, description, features }) => {
  return (
    <div style={{
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "8px",
      border: `1px solid ${palette.palePink}`,
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
    }}>
      <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
        {title}
      </h3>
      <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
        {description}
      </p>
      <div style={{ marginBottom: "15px" }}>
        <p style={{ fontWeight: "bold", fontSize: "12px", color: "#333", marginBottom: "10px" }}>
          FEATURES INCLUDED:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {features.map((feature, idx) => (
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
              }}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button style={{
        width: "100%",
        padding: "12px",
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
        Learn More
      </button>
    </div>
  )
}
