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

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return {
        background: 'linear-gradient(to right, #f0f7ff, #e0efff)',
        color: '#0066e6'
      };
    }
    if (variant === 'accent') {
      return {
        backgroundColor: '#fff7ed',
        color: '#ea580c'
      };
    }
    return {
      backgroundColor: '#f5f5f5',
      color: '#404040'
    };
  };

  const classes = `${baseClasses} ${className}`;

  return <span className={classes} style={getVariantStyle()}>{children}</span>;
};

export default Badge;
