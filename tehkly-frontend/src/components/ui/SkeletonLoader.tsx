import { LucideIcon } from 'lucide-react';

// --- Tipos Globais ---
type IconType = LucideIcon;

// --- Helper: Icon Wrapper ---
interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => <Icon className={`inline-block h-5 w-5 ${className}`} />;

// --- Component: Skeleton Loader ---
interface SkeletonLoaderProps {
  className?: string;
}
export const SkeletonLoader = ({ className = '' }: SkeletonLoaderProps) => {
  return <div className={`bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse ${className}`}></div>;
};
