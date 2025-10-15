import { LucideIcon } from 'lucide-react';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  iconPosition?: 'left' | 'right';
}
export const Input = ({ type = 'text', placeholder, icon, iconPosition = 'left', className = '', ...props }: InputProps) => {
  const baseStyles = 'w-full bg-transparent border-2 border-border rounded-lg py-2.5 text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors duration-200';
  const paddingStyles = icon ? (iconPosition === 'left' ? 'pl-10 pr-4' : 'pr-10 pl-4') : 'px-4';

  return (
    <div className="relative w-full">
      {icon && (
        <div className={`absolute top-1/2 -translate-y-1/2 text-secondary ${iconPosition === 'left' ? 'left-3' : 'right-3'}`}>
          <IconWrapper icon={icon} />
        </div>
      )}
      <input type={type} placeholder={placeholder} className={`${baseStyles} ${paddingStyles} ${className}`} {...props} />
    </div>
  );
};