import { useState } from 'react'
import { AuthForm } from './AuthForm'
import { palette } from '../../palette'

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#fafafa'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: `0 4px 12px ${palette.shadowLight}`
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '28px' }}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '14px' }}>
          {isSignUp
            ? 'Sign up to get started'
            : 'Sign in to your account'}
        </p>

        <AuthForm
          isSignUp={isSignUp}
          onSubmit={() => {
            // Handle successful login
            alert('Logged in successfully!')
          }}
        />

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: palette.softPink,
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onMouseEnter={(e) => e.target.style.color = palette.dustyRose}
            onMouseLeave={(e) => e.target.style.color = palette.softPink}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  )
}
