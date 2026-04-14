import "../styles/footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Leafline Digital</h3>
            <p>Clean, modern web design for small businesses.</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services#web-design">Web Design</a></li>
              <li><a href="/services#branding">Branding</a></li>
              <li><a href="/services#seo">SEO</a></li>
              <li><a href="/services#maintenance">Maintenance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p className="footer-text">Ready to grow your online presence?</p>
            <a href="/contact" className="footer-cta">Let&apos;s Talk</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Leafline Digital. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
