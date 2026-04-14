import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"
import { Navigate } from "react-router-dom"
import { palette } from "../../palette"

const UserInfo = ({ user, onLogout }) => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px',
      backgroundColor: '#fafafa',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Welcome Back!</h2>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        You're logged in as:
      </p>
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: palette.dustyRose,
        marginBottom: '30px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '4px',
        border: `1px solid ${palette.palePink}`
      }}>
        {user.email}
      </p>
      <button
        onClick={onLogout}
        style={{
          padding: '12px 30px',
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
        Log Out
      </button>
    </div>
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

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <UserInfo user={user} onLogout={handleLogout} />
    </div>
  )
}
