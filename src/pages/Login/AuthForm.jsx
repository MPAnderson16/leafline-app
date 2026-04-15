import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'
import { palette } from '../../palette'
import { Modal } from './Modal'

export const AuthForm = ({ isSignUp, onSubmit }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('success')
  const [modalMessage, setModalMessage] = useState('')
  const [showingSuccessModal, setShowingSuccessModal] = useState(false)

  const showModal = (type, message) => {
    setModalType(type)
    setModalMessage(message)
    setModalOpen(true)
    if (type === 'success') {
      setShowingSuccessModal(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
          showModal('error', error.message)
        } else {
          showModal('success', 'Check your email for confirmation!')
          setEmail('')
          setPassword('')
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
          showModal('error', error.message)
        } else {
          showModal('success', 'Welcome back! Click below to go to your dashboard.')
          onSubmit?.()
        }
      }
    } catch (err) {
      showModal('error', 'An error occurred. Please try again.')
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
    <>
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

      <Modal
        type={modalType}
        message={modalMessage}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionText={showingSuccessModal ? 'Go to Dashboard' : null}
        onAction={showingSuccessModal ? () => navigate('/dashboard') : null}
      />
    </>
  )
}