import React, { useState, useEffect } from 'react';
import { CloseSquare, ShieldWarning, CheckCircle, CloseCircle } from '@solar-icons/react/ssr';
import { LucideIcon } from 'lucide-react';

type IconType = LucideIcon;

// --- Tipo Genérico para Ícones ---
type IconComponent = React.ComponentType<{ className?: string; [key: string]: any }>;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconComponent;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => (
    <Icon className={`inline-block h-5 w-5 ${className}`} />
);

type ToasterType = 'success' | 'error' | 'warning'; 
interface ToasterProps {
    message: string;
    type?: ToasterType;
    onClose: () => void;
}

export const Toaster = ({ message, type = 'success', onClose }: ToasterProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [isProgressing, setIsProgressing] = useState(false);

  useEffect(() => {
    const enterTimeout = setTimeout(() => setIsEntering(false), 50);
    const progressTimeout = setTimeout(() => setIsProgressing(true), 100);
    const exitTimeout = setTimeout(handleClose, 4000);
    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(progressTimeout);
      clearTimeout(exitTimeout);
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const baseStyles = 'fixed top-24 right-5 flex items-start gap-4 p-5 rounded-xl shadow-2xl z-50 transition-all duration-300 ease-out border-2 overflow-hidden';
  
  // CORREÇÃO: Animação alterada para surgir de cima.
  const animationStyles = isEntering || isExiting 
    ? 'opacity-0 -translate-y-12' 
    : 'opacity-100 translate-y-0';

  const variants: Record<ToasterType, { bg: string; text: string; icon: IconType; border: string; progress: string; }> = {
    success: { bg: 'bg-primary', text: 'text-primary-foreground', icon: CheckCircle, border: 'border-primary/20', progress: 'bg-foreground/30' },
    error: { bg: 'bg-red-500', text: 'text-white', icon: CloseCircle, border: 'border-white/30', progress: 'bg-white/40' },
    warning: { bg: 'bg-yellow-500', text: 'text-white', icon: ShieldWarning, border: 'border-white/30', progress: 'bg-white/40' },
  };

  const currentVariant = variants[type];

  return (
    <div className={`${baseStyles} ${animationStyles} ${currentVariant.bg} ${currentVariant.text} ${currentVariant.border}`} role="alert">
      <IconWrapper icon={currentVariant.icon} className="h-6 w-6 mt-0.5" />
      <div className="flex-grow">
        <span className="font-semibold">{message}</span>
      </div>
      <button onClick={handleClose} className="ml-2 text-current hover:opacity-75">
        <IconWrapper icon={CloseSquare} />
      </button>
      <div className="absolute bottom-0 left-0 h-1 bg-foreground/10 w-full">
        <div 
          className={`h-full ${currentVariant.progress} ${isProgressing ? 'w-0' : 'w-full'}`}
          style={{ transition: 'width 4s linear' }}
        />
      </div>
    </div>
  );
};