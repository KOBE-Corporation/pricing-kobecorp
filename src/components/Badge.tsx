import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'neutral';
  className?: string;
}

const Badge = ({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) => {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600',
    accent: 'bg-accent-50 text-accent-600',
    neutral: 'bg-neutral-100 text-neutral-700',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
};

export default Badge;
