import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Tooltip ---
interface TooltipProps {
    content: string;
    children: ReactNode;
}
export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute bottom-full mb-2 w-max max-w-xs left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <div className="bg-foreground text-background text-sm rounded-md px-3 py-1.5 relative">
          {content}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-foreground"></div>
        </div>
      </div>
    </div>
  );
};