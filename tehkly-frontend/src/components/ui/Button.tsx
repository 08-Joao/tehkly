import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Button ---
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
}
export const Button = ({ children, variant = 'primary', icon, iconPosition = 'left', disabled, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-5 py-2.5 inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background active:scale-95';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-foreground hover:brightness-110 focus:ring-ring',
    secondary: 'bg-secondary text-primary-foreground hover:brightness-125 focus:ring-secondary',
    ghost: 'bg-transparent border border-border text-foreground hover:bg-foreground/5 focus:ring-secondary',
  };
  const disabledStyles = 'bg-border text-secondary cursor-not-allowed opacity-50';
  const combinedClassName = `${baseStyles} ${disabled ? disabledStyles : variants[variant]} ${className}`;
  const IconComponent = icon && <IconWrapper icon={icon} />;

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {iconPosition === 'left' && IconComponent}
      {children}
      {iconPosition === 'right' && IconComponent}
    </button>
  );
};