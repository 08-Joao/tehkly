import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Sun, Moon } from '@solar-icons/react/ssr';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper (não modificado) ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
export const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => (
  <Icon className={`inline-block h-5 w-5 ${className}`} />
);

// --- Component: Navbar (MODIFICADO) ---
interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  children: ReactNode;
  /** Ícone a ser exibido no modo claro (tema escuro ativo) */
  lightModeIcon?: ReactNode;
  /** Ícone a ser exibido no modo escuro (tema claro ativo) */
  darkModeIcon?: ReactNode;
}

export const Navbar = ({
  isDarkMode,
  onThemeToggle,
  children,
  // Definimos ícones padrão para que o componente funcione sem precisar passá-los sempre
  lightModeIcon = <Sun />,
  darkModeIcon = <Moon />,
}: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-[#D5D5D5] dark:border-[#656565]">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold text-black dark:text-white">
          <span className="text-[#C0FF6B]">Tehkly</span>
        </div>
        <div className="flex items-center gap-4">
          {children}
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full text-[#656565] dark:text-[#D5D5D5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {/* Agora usamos as props para renderizar o ícone correto */}
            {isDarkMode ? lightModeIcon : darkModeIcon}
          </button>
        </div>
      </div>
    </nav>
  );
};