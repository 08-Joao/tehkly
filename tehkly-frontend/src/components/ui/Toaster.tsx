import React, { useState, useEffect } from 'react';
import { CloseSquare, ShieldWarning, CheckCircle, CloseCircle } from '@solar-icons/react/ssr';

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
  // --- Estados para controlar as animações ---
  const [show, setShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Efeito para a animação de ENTRADA
  useEffect(() => {
    const enterTimeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(enterTimeout);
  }, []);
  
  // Efeito para a animação de SAÍDA (automática)
  useEffect(() => {
    // Só inicia o timer de saída depois que a animação de entrada terminar.
    if (show) {
      const exitTimer = setTimeout(handleClose, 5000);
      return () => clearTimeout(exitTimer);
    }
  }, [show, onClose]);

  // Função para controlar a animação de saída e chamar o onClose
  const handleClose = () => {
    setIsClosing(true);
    // Aguarda a animação de saída (300ms) antes de remover o componente da DOM
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // --- Paleta de Cores e Ícones Aprimorada ---
  const variants: Record<ToasterType, { style: string; icon: IconComponent; }> = {
    success: {
        style: 'bg-primary/80 backdrop-blur-sm text-primary-foreground border-primary/30',
        icon: CheckCircle
    },
    error: {
        style: 'bg-red-500/80 backdrop-blur-sm text-white border-red-300/30',
        icon: CloseCircle
    },
    warning: {
        style: 'bg-amber-500/80 backdrop-blur-sm text-white border-amber-300/30',
        icon: ShieldWarning
    },
  };
  const currentVariant = variants[type];

  return (
    <div 
        role="alert"
        // --- Classes de Animação e Estilo ---
        className={`
            fixed top-5 right-5 flex items-start gap-4 p-4 max-w-sm
            rounded-lg border shadow-xl z-50
            transition-all duration-300 ease-in-out
            ${currentVariant.style}
            ${show && !isClosing ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}
        `}
    >
      <IconWrapper icon={currentVariant.icon} className="h-6 w-6 flex-shrink-0 mt-0.5" />
      <span className="font-semibold flex-grow text-sm">{message}</span>
      <button 
          onClick={handleClose} 
          aria-label="Fechar notificação"
          className="ml-2 p-1 rounded-full hover:bg-foreground/10 transition-colors"
      >
        <IconWrapper icon={CloseSquare} className="h-5 w-5"/>
      </button>
    </div>
  );
};