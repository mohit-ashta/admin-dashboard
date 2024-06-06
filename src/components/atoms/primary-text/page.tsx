import React, { ReactNode } from "react";

interface PrimarytextProps {
  children?: ReactNode;
  size?: "base" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "centered";
  className?: string;
}

export const Primarytext: React.FC<PrimarytextProps> = ({
  children,
  size,
  className,
}) => {
  let titlesize = "text-base text-secondary uppercase leading-6 font-bold";
  switch (size) {
    case "base":
      titlesize = "text-base text-body text-cyan-500";
      break;
    case "xs":
      titlesize = "text-xs  uppercase font-medium text-cyan-500";
      break;
    case "sm":
      titlesize = "text-sm text-base  font-medium text-cyan-500";
      break;
    case "md":
      titlesize = "text-md  text-black";
      break;
    case "lg":
      titlesize = " text-lg font-normal text-black";
      break;
    case "xl":
      titlesize = "text-xl font-bold   text-cyan-500";
      break;
    case "xxl":
      titlesize = "text-xxl font-bold   text-cyan-500";
      break;
    default:
      break;
  }
  return (
    <>
      <p className={`${titlesize} ${className}`}>{children}</p>
    </>
  );
};
