import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

function Button({
  children,
  onClick,
  icon,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseClasses = 'flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition duration-200'
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-blue-700'
      : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
