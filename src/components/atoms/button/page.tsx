import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ className, title ,onClick}) => {
  return (
    <button className={`bg-cyan-600 text-white rounded-md px-5 py-2 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
