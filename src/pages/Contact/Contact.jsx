import { ContactForm } from './ContactForm'
import { palette } from '../../palette'

export default function Contact() {
  return (
    <div style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Get in Touch</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Have a project in mind? Let's talk about how I can help your business grow.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        marginBottom: '50px'
      }}>
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '20px', color: '#333' }}>Contact Information</h2>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: palette.dustyRose, marginBottom: '5px' }}>
              EMAIL
            </h3>
            <p style={{ color: '#666', fontSize: '16px' }}>hello@leafline.digital</p>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: palette.dustyRose, marginBottom: '5px' }}>
              PHONE
            </h3>
            <p style={{ color: '#666', fontSize: '16px' }}>(555) 123-4567</p>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: palette.dustyRose, marginBottom: '5px' }}>
              LOCATION
            </h3>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Based in the United States<br />
              Available for remote projects worldwide
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '20px', color: '#333' }}>Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
