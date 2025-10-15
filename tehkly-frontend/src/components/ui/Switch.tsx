import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Switch ---
interface SwitchProps {
    isOn: boolean;
    onToggle: () => void;
}
export const Switch = ({ isOn, onToggle }: SwitchProps) => {
  const switchId = React.useId();

  return (
    <label htmlFor={switchId} className="relative inline-flex items-center cursor-pointer">
      <input
        id={switchId}
        type="checkbox"
        className="sr-only peer"
        checked={isOn}
        onChange={onToggle}
      />
      <div className="w-14 h-8 bg-border rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-background peer-focus:ring-ring peer-checked:bg-primary transition-colors duration-300 ease-in-out"></div>
      <div className="absolute top-1 left-1 bg-background border-border border rounded-full h-6 w-6 shadow-md transition-transform duration-300 ease-in-out transform peer-checked:translate-x-6"></div>
    </label>
  );
};