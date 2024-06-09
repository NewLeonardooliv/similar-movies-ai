import React from 'react';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  text: string
}
const Button: React.FC<ButtonProps> = ({ text, onClick, className, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
