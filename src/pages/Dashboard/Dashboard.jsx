import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"
import { Navigate } from "react-router-dom"
import { palette } from "../../palette"

const AccountSection = ({ user, onLogout }) => {
  return (
    <div style={{
      backgroundColor: '#fafafa',
      padding: '30px',
      borderRadius: '8px',
      marginBottom: '30px',
      border: `1px solid ${palette.palePink}`
    }}>
      <h2 style={{ fontSize: '22px', marginBottom: '20px', color: '#333' }}>Account Information</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: palette.dustyRose, marginBottom: '5px' }}>
          EMAIL ADDRESS
        </label>
        <p style={{ fontSize: '16px', color: '#333', margin: 0 }}>{user.email}</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: palette.dustyRose, marginBottom: '5px' }}>
          ACCOUNT STATUS
        </label>
        <p style={{ fontSize: '16px', color: palette.sageGreen, margin: 0, fontWeight: 'bold' }}>✓ Active</p>
      </div>
      <button
        onClick={onLogout}
        style={{
          padding: '12px 30px',
          backgroundColor: '#d32f2f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'backgroundColor 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#b71c1c'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#d32f2f'}
      >
        Log Out
      </button>
    </div>
  )
}

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '8px',
        border: `2px solid ${palette.lightPink}`,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = palette.palePink
        e.currentTarget.style.boxShadow = `0 4px 12px ${palette.softPink}40`
        e.currentTarget.style.transform = 'translateY(-5px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}>
        <div style={{ fontSize: '32px', marginBottom: '15px' }}>{icon}</div>
        <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{description}</p>
      </div>
    </a>
  )
}

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  const services = [
    {
      title: 'Website Design',
      description: 'Custom, responsive websites built for your business',
      icon: '🎨',
      link: '/services'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Build your online store with secure payments',
      icon: '🛒',
      link: '/services'
    },
    {
      title: 'Web Applications',
      description: 'Interactive web apps with real-time features',
      icon: '⚙️',
      link: '/services'
    },
    {
      title: 'View Portfolio',
      description: 'See our recent completed projects',
      icon: '📁',
      link: '/portfolio'
    },
    {
      title: 'Contact Support',
      description: 'Get help and maintenance for your project',
      icon: '💬',
      link: '/contact'
    },
    {
      title: 'More Services',
      description: 'Explore all our service offerings',
      icon: '✨',
      link: '/services'
    }
  ]

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#333' }}>Welcome to Your Dashboard</h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>
        Manage your account and explore our services
      </p>

      <AccountSection user={user} onLogout={handleLogout} />

      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Available Services</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
