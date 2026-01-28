import { Technology } from '@/lib/types';

interface TechBadgeProps {
  tech: Technology;
  size?: 'sm' | 'md' | 'lg';
}

export default function TechBadge({ tech, size = 'md' }: TechBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${tech.color} ${sizeClasses[size]} transition-transform hover:scale-105`}
    >
      {tech.icon && <span className="mr-1">{tech.icon}</span>}
      {tech.name}
    </span>
  );
}
