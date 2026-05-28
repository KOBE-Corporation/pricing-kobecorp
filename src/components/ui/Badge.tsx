import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'accent' | 'neutral'
  className?: string
  icon?: ReactNode
}

export function Badge({
  children,
  variant = 'primary',
  className = '',
  icon,
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600',
    accent: 'bg-accent-50 text-accent-600',
    neutral: 'bg-neutral-100 text-neutral-700',
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition-all duration-300 hover:shadow-md ${variantClasses[variant]} ${className}`}
    >
      {icon && (
        <span className="flex-shrink-0 transition-transform duration-300 hover:rotate-12">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  )
}
