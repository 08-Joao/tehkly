import React, { useEffect, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { CloseSquare } from '@solar-icons/react/ssr';
// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Modal ---
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}
export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white dark:bg-[#111] border-2 border-[#D5D5D5] dark:border-[#656565] w-full max-w-lg m-4 rounded-lg shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black dark:text-white">{title}</h2>
          <button onClick={onClose} className="text-[#656565] dark:text-[#D5D5D5] hover:text-black dark:hover:text-white transition-colors">
            <IconWrapper icon={CloseSquare} className="h-10 w-10" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
