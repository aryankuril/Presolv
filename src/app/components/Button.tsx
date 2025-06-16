import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 transition-all duration-200';
  const variantStyles = {
    primary: 'custom-btn-primary !bg-[#007AFF] hover:!bg-white hover:!text-[#007AFF]',
    secondary: 'bg-[#FBB04C] text-white hover:bg-[#f9950a]',
    outline: 'border-2 border-[#007AFF] text-white hover:bg-[#007AFF]/10'
  };
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {variant === 'primary' && (
        <Image 
          src="/images/btn-shine.svg" 
          alt="shine" 
          width={15} 
          height={15}
          className="max-sm:w-3"
        />
      )}
    </button>
  );
};

export default Button; 