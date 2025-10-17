import React, { ReactNode } from 'react';
import Image from 'next/image';
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
}

export const Navbar = ({
  isDarkMode,
  onThemeToggle,
  children,
  centerContent,
  lightModeIcon = <Moon size={20} weight="LineDuotone" />,
  darkModeIcon = <Sun size={20} weight="LineDuotone" />,
}: NavbarProps) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleThemeToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onThemeToggle();
    }, 150);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-background backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-foreground">
            <Image 
              src="/teh-rex_background.png"
              alt="Tehkly_logo"
              width={50}  
              height={50}
            />
          </div>
          <div className='text-4xl font-bold text-foreground'>
              <span className='text-primary'>Tehkly</span>

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
            onClick={handleThemeToggle}
            className="p-2 rounded-full text-secondary hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <div 
              className="relative"
              style={{
                transform: isAnimating ? 'rotate(360deg) scale(0.8)' : 'rotate(0deg) scale(1)',
                opacity: isAnimating ? 0.4 : 1,
                transition: 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
              }}
            >
              {isDarkMode ? lightModeIcon : darkModeIcon}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}