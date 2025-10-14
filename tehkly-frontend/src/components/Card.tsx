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

// --- Component: Card ---
interface CardProps {
    title: string;
    description: string;
    action?: ReactNode;
    imagePlaceholder?: boolean;
}
export const Card = ({ title, description, action, imagePlaceholder = false }: CardProps) => {
  return (
    <div className="bg-white/5 dark:bg-black/20 border border-[#D5D5D5]/20 dark:border-[#656565]/30 rounded-lg flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-[#C0FF6B]/5 dark:hover:shadow-[#C0FF6B]/10 hover:-translate-y-1 transition-all duration-300 group">
       {imagePlaceholder && <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-t-lg group-hover:opacity-80 transition-opacity" />}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-[#D5D5D5] flex-grow my-3">{description}</p>
        {action && <div className="mt-auto pt-4">{action}</div>}
      </div>
    </div>
  );
};