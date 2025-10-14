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


// --- Component: Dropdown ---
export interface DropdownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}
export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error('useDropdown must be used within a DropdownProvider');
  return context;
};

export const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) close();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={dropdownRef} className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({ children }: { children: ReactNode }) => {
  const { toggle } = useDropdown();
  return <div onClick={toggle} className="cursor-pointer">{children}</div>;
};

export const DropdownContent = ({ children, align = 'right' }: { children: ReactNode; align?: 'left' | 'right' }) => {
  const { isOpen, close } = useDropdown();
  const alignClass = align === 'right' ? 'right-0' : 'left-0';
  const originClass = align === 'right' ? 'origin-top-right' : 'origin-top-left';
  const animationClasses = isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none';

  return (
    <div className={`absolute ${alignClass} mt-2 w-56 ${originClass} bg-white dark:bg-black border border-[#D5D5D5] dark:border-[#656565] rounded-lg shadow-lg z-10 transition-all duration-200 ease-out transform ${animationClasses}`} role="menu">
      <div className="p-1" onClick={close}>{children}</div>
    </div>
  );
};

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}
export const DropdownItem = ({ children, onClick }: DropdownItemProps) => (
  <button onClick={onClick} className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-black dark:text-white rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors" role="menuitem">
    {children}
  </button>
);