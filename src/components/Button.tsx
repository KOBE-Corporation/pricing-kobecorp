import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
      'text-white shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-neutral-700 border border-neutral-200 shadow-subtle hover:shadow-md',
    outline:
      'bg-transparent border hover:bg-brand-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Styles inline pour forcer les couleurs bleues
  const getStyle = () => {
    if (variant === 'primary') {
      return { backgroundColor: '#0a7aff' };
    }
    if (variant === 'outline') {
      return { color: '#0a7aff', borderColor: '#0a7aff' };
    }
    return {};
  };

  const getHoverStyle = () => {
    if (variant === 'primary') {
      return {
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.backgroundColor = '#0066e6';
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.backgroundColor = '#0a7aff';
        }
      };
    }
    if (variant === 'outline') {
      return {
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.borderColor = '#0066e6';
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          e.currentTarget.style.borderColor = '#0a7aff';
        }
      };
    }
    return {};
  };

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

  const style = getStyle();
  const hoverHandlers = getHoverStyle();

  // Si href commence par /, utiliser Link de react-router-dom
  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} style={style} {...hoverHandlers}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} style={style} {...hoverHandlers}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={style} {...hoverHandlers}>
      {content}
    </button>
  );
};

export default Button;
