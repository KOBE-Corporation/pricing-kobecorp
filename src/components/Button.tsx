import { ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  onClick,
  className = '',
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5';

  const variantClasses = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-neutral-700 border border-neutral-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 shadow-subtle hover:shadow-md',
    outline:
      'bg-transparent text-brand-500 border border-brand-500 hover:bg-brand-50 hover:border-brand-600',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
      {!icon && iconPosition === 'right' && (
        <ArrowRightIcon className="h-4 w-4" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
