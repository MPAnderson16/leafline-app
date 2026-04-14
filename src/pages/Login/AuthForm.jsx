import { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { palette } from '../../palette'

export const AuthForm = ({ isSignUp, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
          setError(error.message)
        } else {
          alert('Check your email for confirmation!')
          setEmail('')
          setPassword('')
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
          setError(error.message)
        } else {
          onSubmit?.()
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: `1px solid ${palette.palePink}`,
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  }

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: palette.softPink,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'backgroundColor 0.3s',
    marginBottom: '10px'
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />
      {error && (
        <p style={{ color: '#d32f2f', fontSize: '14px', marginBottom: '15px' }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          ...buttonStyle,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
        onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = palette.dustyRose)}
        onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = palette.softPink)}
      >
        {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Log In')}
      </button>
    </form>
  )
}
