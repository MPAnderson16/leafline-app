import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌿 Leafline Digital
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link nav-link-login">Login</Link>
        </div>
      </div>
    </nav>
  )
}
