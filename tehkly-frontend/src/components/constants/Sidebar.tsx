// components/constants/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import { Home, CaseMinimalistic, User, Settings, Logout3, RoundAltArrowRight, RoundAltArrowLeft } from '@solar-icons/react/ssr';
import { SidebarItem } from './Sidebar-settings';

// ============================================
// COMPONENTE PRINCIPAL DA SIDEBAR
// ============================================
export const Sidebar: React.FC = () => {
  // Estado para controlar a versão expandida/colapsada (padrão: colapsada)
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Estado para controlar qual item está ativo
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  // ============================================
  // ITENS DE NAVEGAÇÃO DA SIDEBAR
  // ============================================
  const navigationItems = [
    {
      id: 'home',
      icon: Home,
      label: 'Início',
      href: '#'
    },
    {
      id: 'projects',
      icon: CaseMinimalistic,
      label: 'Projetos',
      href: '#projetos'
    },
    {
      id: 'profile',
      icon: User,
      label: 'Perfil',
      href: '#'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Configurações',
      href: '#'
    }
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full z-40
        bg-card border-r border-border
        transition-all duration-300 ease-in-out
        flex flex-col
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
    >
      {/* ============================================ */}
      {/* HEADER DA SIDEBAR - Logo e botão de expandir */}
      {/* ============================================ */}
      <div className="p-6 border-b border-border flex items-center justify-between">
        {/* Logo - só aparece quando expandido */}
        {isExpanded && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Tehkly
            </span>
          </div>
        )}
        
        {/* Botão para expandir/colapsar - sempre visível */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-elevation-1 transition-colors"
          aria-label={isExpanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
        >
          {isExpanded ? (
            <RoundAltArrowLeft className="w-5 h-5 text-secondary" />
          ) : (
            <RoundAltArrowRight className="w-5 h-5 text-secondary" />
          )}
        </button>
      </div>

      {/* ============================================ */}
      {/* NAVEGAÇÃO PRINCIPAL */}
      {/* ============================================ */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={activeItem === item.id}
            isExpanded={isExpanded}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </nav>

      {/* ============================================ */}
      {/* FOOTER DA SIDEBAR - Ações secundárias */}
      {/* ============================================ */}
      {/* <div className="p-4 border-t border-border space-y-2">
        <button
          className={`
            w-full flex items-center gap-3 px-3 py-3 rounded-xl
            text-red-600 dark:text-red-400
            hover:bg-red-50 dark:hover:bg-red-950/30
            transition-all duration-200
            ${!isExpanded && 'justify-center'}
          `}
          onClick={() => console.log('Logout clicked')}
        >
          <Logout3 className="w-5 h-5 flex-shrink-0" />
          {isExpanded && (
            <span className="text-sm font-medium">Sair</span>
          )}
        </button>
      </div> */}
    </aside>
  );
};