export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  ...props 
}) {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = size === 'small' ? 'btn-small' : ''
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>
}

export function CardTitle({ children }) {
  return <h3 className="card-title">{children}</h3>
}

export function CardBody({ children }) {
  return <div className="card-body">{children}</div>
}

export function CardFooter({ children }) {
  return <div className="card-footer">{children}</div>
}

export function Badge({ children, variant = 'default' }) {
  const badgeClass = variant === 'accent' ? 'badge-accent' : 'badge'
  return <span className={badgeClass}>{children}</span>
}

export function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export function Grid({ children, columns = 2 }) {
  const gridClass = columns === 3 ? 'grid-3' : 'grid-2'
  return (
    <div className={`grid ${gridClass}`}>
      {children}
    </div>
  )
}
