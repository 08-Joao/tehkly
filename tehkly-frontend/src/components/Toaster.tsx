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

// --- Component: Toaster ---
type ToasterType = 'success' | 'error' | 'warning';
interface ToasterProps {
    message: string;
    type?: ToasterType;
    onClose: () => void;
}
export const Toaster = ({ message, type = 'success', onClose }: ToasterProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const variants: Record<ToasterType, { bg: string; text: string; icon: IconType; border: string; }> = {
    success: { bg: 'bg-[#C0FF6B]', text: 'text-black', icon: CheckCircle, border: 'border-green-800/20' },
    error: { bg: 'bg-red-500', text: 'text-white', icon: XCircle, border: 'border-white/30' },
    warning: { bg: 'bg-yellow-500', text: 'text-white', icon: AlertTriangle, border: 'border-white/30' },
  };
  const currentVariant = variants[type];

  return (
    <div className={`fixed top-24 right-5 flex items-start gap-4 p-5 rounded-xl shadow-2xl z-50 border-2 ${currentVariant.bg} ${currentVariant.text} ${currentVariant.border}`} role="alert">
      <IconWrapper icon={currentVariant.icon} className="h-6 w-6 mt-0.5" />
      <span className="font-semibold flex-grow">{message}</span>
      <button onClick={onClose} className="ml-2 text-current hover:opacity-75"><IconWrapper icon={X} /></button>
    </div>
  );
};
