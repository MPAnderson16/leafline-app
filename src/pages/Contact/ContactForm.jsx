import { useState } from 'react'
import { palette } from '../../palette'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: `1px solid ${palette.palePink}`,
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="6"
        style={{
          ...inputStyle,
          fontFamily: 'inherit',
          resize: 'vertical'
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: palette.softPink,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'backgroundColor 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = palette.dustyRose}
        onMouseLeave={(e) => e.target.style.backgroundColor = palette.softPink}
      >
        Send Message
      </button>
      {submitted && (
        <p style={{ color: palette.sageGreen, textAlign: 'center', marginTop: '15px' }}>
          ✓ Message sent successfully!
        </p>
      )}
    </form>
  )
}
