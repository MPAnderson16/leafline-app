import heroImage from '../../assets/hero-home-image.svg.jpg'

export const HeroSection = () => {
  return (
    <div style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      padding: "80px 40px",
      textAlign: "center",
      minHeight: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    }}>
      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)",
        boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.3)"
      }}></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}>
          Leafline Digital
        </h1>
        <p style={{
          fontSize: "24px",
          color: "white",
          marginBottom: "30px",
          maxWidth: "600px",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)"
        }}>
          Modern, plant-inspired web design for small businesses
        </p>
        <p style={{
          fontSize: "16px",
          color: "rgba(255, 255, 255, 0.9)",
          marginBottom: "40px",
          maxWidth: "600px",
          lineHeight: "1.6",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>
          We craft beautiful, user-friendly websites that help your business grow. From stunning design to seamless functionality.
        </p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            padding: "15px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "backgroundColor 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#388e3c"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#4caf50"}>
            Get Started
          </button>
          <button style={{
            padding: "15px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "2px solid white",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
          }}>
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
