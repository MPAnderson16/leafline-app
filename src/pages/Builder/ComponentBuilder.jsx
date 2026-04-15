import { useState } from 'react'
import ComponentOption from './ComponentOption'
import { palette } from '../../palette'

export default function ComponentBuilder() {
  const [selectedComponents, setSelectedComponents] = useState({})

  const components = [
    { id: 'qr-code', name: 'QR Code Generator', description: 'Dynamic QR codes that link to your business info or promotions', icon: '📱' },
    { id: 'google-maps', name: 'Google Maps Integration', description: 'Embedded maps showing your business location', icon: '🗺️' },
    { id: 'social-media', name: 'Social Media Links', description: 'Display and link to all your social media accounts', icon: '👥' },
    { id: 'interactive-forms', name: 'Interactive Forms', description: 'Custom contact forms with validation and email notifications', icon: '📝' },
    { id: 'games', name: 'Interactive Games', description: 'Engaging mini-games to boost user engagement', icon: '🎮' },
    { id: 'chat-bot', name: 'Live Chat / Chatbot', description: 'Real-time customer support with AI-powered responses', icon: '💬' },
    { id: 'analytics', name: 'Analytics Dashboard', description: 'Track visitor behavior, traffic, and conversions', icon: '📊' },
    { id: 'email-signup', name: 'Email Signup Form', description: 'Build your mailing list with customizable signup forms', icon: '📧' },
    { id: 'countdown-timer', name: 'Countdown Timer', description: 'Create urgency with countdown timers for sales or events', icon: '⏱️' },
    { id: 'image-carousel', name: 'Image Carousel/Slider', description: 'Beautiful rotating image galleries', icon: '🖼️' },
    { id: 'video-embed', name: 'Video Embedding', description: 'Embed YouTube, Vimeo, or custom video players', icon: '🎥' },
    { id: 'testimonials', name: 'Testimonials Section', description: 'Showcase customer reviews and success stories', icon: '⭐' },
    { id: 'payment-gateway', name: 'Payment Gateway', description: 'Accept payments (Stripe, PayPal, etc.)', icon: '💳' },
    { id: 'booking-calendar', name: 'Booking/Appointment Calendar', description: 'Let customers book appointments or services online', icon: '📅' },
    { id: 'faq-section', name: 'FAQ Accordion', description: 'Expandable FAQ section to answer common questions', icon: '❓' },
    { id: 'mobile-responsive', name: 'Mobile Responsive Design', description: 'Perfect display on all devices and screen sizes', icon: '📲' }
  ]

  const toggleComponent = (id) => {
    setSelectedComponents(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const selectedCount = Object.values(selectedComponents).filter(Boolean).length

  return (
    <div>
      {selectedCount > 0 && (
        <div style={{
          backgroundColor: palette.palePink,
          padding: '15px 20px',
          borderRadius: '6px',
          marginBottom: '30px',
          borderLeft: `4px solid ${palette.softPink}`
        }}>
          <p style={{ margin: 0, color: '#333', fontWeight: 'bold' }}>
            🎯 You've selected {selectedCount} component{selectedCount !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {components.map(component => (
          <ComponentOption
            key={component.id}
            {...component}
            selected={selectedComponents[component.id] || false}
            onToggle={toggleComponent}
          />
        ))}
      </div>

      <button
        style={{
          padding: '12px 40px',
          backgroundColor: selectedCount > 0 ? palette.softPink : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: selectedCount > 0 ? 'pointer' : 'not-allowed'
        }}
        disabled={selectedCount === 0}
      >
        Request Custom Quote
      </button>
    </div>
  )
}
