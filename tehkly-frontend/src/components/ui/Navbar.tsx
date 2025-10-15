import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Sun, Moon } from '@solar-icons/react/ssr';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
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
  /** Conteúdo a ser renderizado no centro da Navbar */
  centerContent?: ReactNode;
  /** Ícone a ser exibido no modo claro (tema escuro ativo) */
  lightModeIcon?: ReactNode;
  /** Ícone a ser exibido no modo escuro (tema claro ativo) */
  darkModeIcon?: ReactNode;
  /** Elemento a ser renderizado ANTES do logo (ex: botão da sidebar) */
  beforeLogo?: ReactNode;
}

export const Navbar = ({
  isDarkMode,
  onThemeToggle,
  children,
  centerContent,
  lightModeIcon = <Moon size={20} weight="LineDuotone" className="text-slate-400" />,
  darkModeIcon = <Sun size={20} weight="LineDuotone" className="text-yellow-400" />,
  beforeLogo,
}: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center pl-24">
        {/* LADO ESQUERDO: Botão beforeLogo + Logo */}
        <div className="flex items-center gap-3">
          {beforeLogo}
          <div className="text-2xl font-bold text-foreground">
            <span className="text-primary">Tehkly</span>
          </div>
        </div>

        {/* CENTRO: Links de Navegação */}
        <div className="hidden md:flex items-center gap-5">
          {centerContent}
        </div>

        {/* LADO DIREITO: Children + Botão de tema */}
        <div className="flex items-center gap-4">
          {children}
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full text-secondary hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? lightModeIcon : darkModeIcon}
          </button>
        </div>
      </div>
    </nav>
  );
};
