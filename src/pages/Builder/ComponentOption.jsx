import { palette } from '../../palette'

export default function ComponentOption({ id, name, description, icon, selected, onToggle }) {
  return (
    <div
      onClick={() => onToggle(id)}
      style={{
        padding: '20px',
        border: `2px solid ${selected ? palette.softPink : palette.lightPink}`,
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: selected ? palette.palePink : 'white',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
    >
      {selected && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '24px',
          height: '24px',
          backgroundColor: palette.softPink,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          ✓
        </div>
      )}

      <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
        {name}
      </h3>
      <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', margin: 0 }}>
        {description}
      </p>
    </div>
  )
}
