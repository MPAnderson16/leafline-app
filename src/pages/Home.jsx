import heroImage from '../assets/hero-home-image.svg.jpg'
import { palette } from '../palette'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Features Section */}
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
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              🎨
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Beautiful Design</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Stunning, modern designs that capture your brand's essence and engage your audience.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              📱
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Mobile Optimized</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Fully responsive designs that look perfect on all devices - phones, tablets, and desktops.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Fast & Secure</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Lightning-fast loading times and enterprise-grade security to protect your business and users.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              🔍
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>SEO Ready</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Built-in SEO optimization to help your website rank higher and attract more customers.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              💬
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Great Support</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Ongoing support and maintenance to keep your website running smoothly and up-to-date.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#4caf50"
            }}>
              💼
            </div>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Professional Service</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Expert designers and developers dedicated to bringing your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
    </div>
  )
}
