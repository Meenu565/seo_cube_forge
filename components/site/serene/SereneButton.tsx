import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function SereneButton({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
