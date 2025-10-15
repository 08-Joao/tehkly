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

// --- Component: Card ---
interface CardProps {
    title: string;
    description: string;
    action?: ReactNode;
    imagePlaceholder?: boolean;
}
export const Card = ({ title, description, action, imagePlaceholder = false }: CardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group">
       {imagePlaceholder && <div className="aspect-video bg-elevation-2 rounded-t-lg group-hover:opacity-80 transition-opacity" />}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-secondary flex-grow my-3">{description}</p>
        {action && <div className="mt-auto pt-4">{action}</div>}
      </div>
    </div>
  );
};