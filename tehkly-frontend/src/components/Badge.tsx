import React, { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import { Sun, Moon, Search, X, CheckCircle, AlertTriangle, XCircle, ChevronUp, MoreVertical, LucideIcon } from 'lucide-react';

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
    primary: 'bg-[#C0FF6B] text-black',
    secondary: 'bg-[#656565] text-white',
    neutral: 'bg-[#D5D5D5] text-black',
  };
  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
};