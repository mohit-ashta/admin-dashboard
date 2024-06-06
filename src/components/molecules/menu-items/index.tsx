"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AccordionProps {
  icon?: JSX.Element;
  title?: string;
  className?: string;
  path: string;
}

export const MenuItem: React.FC<AccordionProps> = ({
  icon,
  title,
  className,
  path,
}) => {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={`flex cursor-pointer gap-5 mb-3 items-center text-black px-5 py-4  hover:bg-slate-300  hover:text-black  ${className} ${
          pathname.includes(path) ? "text-black bg-slate-100 " : "text-black"
        }`}
      >
        <span>{icon}</span>
        <span className={`font-semibold`}>{title}</span>
      </div>
    </Link>
  );
};
