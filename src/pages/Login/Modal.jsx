import { palette } from '../../palette'

export const Modal = ({ type, message, onClose, isOpen, actionText, onAction }) => {
  if (!isOpen) return null

  const isSuccess = type === 'success'
  const bgColor = isSuccess ? palette.sageGreen : '#d32f2f'
  const icon = isSuccess ? '✓' : '✕'

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px',
        maxWidth: '400px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        animation: 'slideUp 0.3s ease'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: bgColor,
          color: 'white',
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontWeight: 'bold'
        }}>
          {icon}
        </div>
        <h2 style={{
          fontSize: '20px',
          marginBottom: '10px',
          color: '#333'
        }}>
          {isSuccess ? 'Success!' : 'Error'}
        </h2>
        <p style={{
          color: '#666',
          fontSize: '14px',
          lineHeight: '1.6',
          marginBottom: '25px'
        }}>
          {message}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {onAction && actionText && (
            <button
              onClick={onAction}
              style={{
                flex: 1,
                padding: '10px 30px',
                backgroundColor: bgColor,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {actionText}
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              flex: onAction ? 1 : 'auto',
              minWidth: '80px',
              padding: '10px 30px',
              backgroundColor: '#ccc',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            {onAction ? 'Cancel' : 'Close'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
