import { palette } from '../../palette'

export const ProjectCard = ({ title, description, category, image }) => {
  return (
    <div style={{
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
        src={image} 
        alt={title}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <span style={{
          display: "inline-block",
          backgroundColor: palette.palePink,
          color: palette.dustyRose,
          padding: "5px 10px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          {category}
        </span>
        <h3 style={{ margin: "10px 0", fontSize: "20px" }}>{title}</h3>
        <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>
          {description}
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
  )
}
