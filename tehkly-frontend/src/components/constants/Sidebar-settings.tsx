// components/constants/Sidebar-settings.tsx
'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

// ============================================
// COMPONENTE: SIDEBAR ITEM
// Item individual de navegação da sidebar
// ============================================
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  badge?: number; // Badge para notificações
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive = false,
  isExpanded = true,
  onClick,
  badge
}) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`
        relative flex items-center gap-3 px-3 py-3 rounded-xl
        transition-all duration-200
        ${!isExpanded && 'justify-center'}
        ${isActive 
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
          : 'text-secondary hover:bg-elevation-1 hover:text-foreground'
        }
      `}
      title={!isExpanded ? label : undefined}
    >
      {/* Ícone do item */}
      <Icon className="w-5 h-5 flex-shrink-0" />
      
      {/* Label - só aparece quando expandido */}
      {isExpanded && (
        <span className="text-sm font-medium">{label}</span>
      )}
      
      {/* Badge de notificação - só aparece quando expandido e quando existe */}
      {isExpanded && badge && badge > 0 && (
        <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
      
      {/* Indicador de item ativo - barra lateral */}
      {isActive && isExpanded && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-foreground rounded-r-full" />
      )}
    </a>
  );
};

// ============================================
// COMPONENTE: SIDEBAR SECTION
// Seção com título para agrupar itens
// ============================================
interface SidebarSectionProps {
  title: string;
  isExpanded?: boolean;
  children: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  isExpanded = true,
  children
}) => {
  return (
    <div className="space-y-2">
      {/* Título da seção - só aparece quando expandido */}
      {isExpanded && (
        <p className="px-3 text-xs font-semibold text-secondary uppercase tracking-wider">
          {title}
        </p>
      )}
      
      {/* Separador quando colapsado */}
      {!isExpanded && (
        <div className="h-px bg-border mx-2 my-4" />
      )}
      
      {/* Itens da seção */}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

// ============================================
// COMPONENTE: SIDEBAR DIVIDER
// Divisor visual entre seções
// ============================================
export const SidebarDivider: React.FC = () => {
  return (
    <div className="h-px bg-border my-4" />
  );
};

// ============================================
// COMPONENTE: SIDEBAR USER PROFILE
// Card de perfil do usuário na sidebar
// ============================================
interface SidebarUserProfileProps {
  name: string;
  email: string;
  avatar?: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

export const SidebarUserProfile: React.FC<SidebarUserProfileProps> = ({
  name,
  email,
  avatar,
  isExpanded = true,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-xl
        hover:bg-elevation-1
        transition-all duration-200
        ${!isExpanded && 'justify-center'}
      `}
    >
      {/* Avatar do usuário */}
      <div className="relative flex-shrink-0">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        {/* Indicador online */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
      </div>
      
      {/* Informações do usuário - só aparece quando expandido */}
      {isExpanded && (
        <div className="flex-1 text-left overflow-hidden">
          <p className="text-sm font-medium text-foreground truncate">
            {name}
          </p>
          <p className="text-xs text-secondary truncate">
            {email}
          </p>
        </div>
      )}
    </button>
  );
};

// ============================================
// COMPONENTE: SIDEBAR BADGE
// Badge para notificações em itens
// ============================================
interface SidebarBadgeProps {
  count: number;
  variant?: 'primary' | 'danger' | 'warning';
  isExpanded?: boolean;
}

export const SidebarBadge: React.FC<SidebarBadgeProps> = ({
  count,
  variant = 'danger',
  isExpanded = true
}) => {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-foreground'
  };

  if (!isExpanded && count > 0) {
    return (
      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
    );
  }

  if (count > 0) {
    return (
      <span className={`
        ml-auto px-2 py-0.5 text-xs font-bold rounded-full
        ${variantStyles[variant]}
      `}>
        {count > 99 ? '99+' : count}
      </span>
    );
  }

  return null;
};