import { palette } from '../../palette'

export const CTASection = () => {
  return (
    <div style={{
      backgroundColor: palette.dustyRose,
      color: "white",
      padding: "60px 40px",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Ready to grow your online presence?
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Let's create something amazing together.
      </p>
      <button style={{
        padding: "15px 40px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: "white",
        color: palette.dustyRose,
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all 0.2s"
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = palette.palePink
        e.target.style.color = palette.dustyRose
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "white"
        e.target.style.color = palette.dustyRose
      }}>
        Get in Touch
      </button>
    </div>
  )
}
