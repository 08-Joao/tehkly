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

// --- Component: Badge ---
type BadgeVariant = 'primary' | 'secondary' | 'neutral';
interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}
export const Badge = ({ children, variant = 'primary', className = '' }: BadgeProps) => {
  const baseStyles = 'px-3 py-1 text-xs font-bold rounded-lg inline-block';
  const variants: Record<BadgeVariant, string> = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-primary-foreground',
    neutral: 'bg-border text-foreground',
  };
  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
};