import React from 'react';

export interface ButtonProps {
  variant: 'active' | 'inactive';
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, text, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full ${
        variant === 'active'
          ? 'bg-[#F6C768] text-black'
          : 'bg-[#1C1F22] text-[#FEF7EE] border border-[#FEF7EE]'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;