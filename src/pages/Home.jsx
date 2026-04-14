export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundColor: "#f0fdf4",
        padding: "80px 40px",
        textAlign: "center",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "#1b5e20",
          fontWeight: "bold"
        }}>
          Leafline Digital
        </h1>
        <p style={{
          fontSize: "24px",
          color: "#555",
          marginBottom: "30px",
          maxWidth: "600px"
        }}>
          Modern, plant-inspired web design for small businesses
        </p>
        <p style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "40px",
          maxWidth: "600px",
          lineHeight: "1.6"
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
            cursor: "pointer"
          }}>
            Get Started
          </button>
          <button style={{
            padding: "15px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            color: "#4caf50",
            border: "2px solid #4caf50",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            View Portfolio
          </button>
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
        backgroundColor: "#2e7d32",
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
          color: "#2e7d32",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Get in Touch
        </button>
      </div>
    </div>
  )
}
