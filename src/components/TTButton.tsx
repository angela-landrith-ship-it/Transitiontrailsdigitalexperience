import { ButtonHTMLAttributes, ReactNode } from 'react';

interface TTButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: ReactNode;
  pulse?: boolean;
}

export function TTButton({ variant = 'primary', children, pulse = false, className = '', ...props }: TTButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[var(--tt-evergreen)] text-white hover:bg-[var(--tt-summit-teal)] focus:ring-2 focus:ring-[var(--tt-sun-amber)] focus:ring-offset-2',
    secondary: 'bg-white text-[var(--tt-evergreen)] border-2 border-[var(--tt-evergreen)] hover:bg-[var(--tt-trail-cream)] focus:ring-2 focus:ring-[var(--tt-sun-amber)] focus:ring-offset-2',
    accent: 'bg-[var(--tt-sun-amber)] text-[var(--tt-summit-teal)] hover:bg-[#E08D28] focus:ring-2 focus:ring-[var(--tt-evergreen)] focus:ring-offset-2',
  };

  const pulseClass = pulse ? 'animate-pulse-slow' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
