import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Primarytext } from "@/components/atoms/primary-text/page";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
}

export const InputField: React.FC<InputProps> = (
  { label, name, type, error, ...rest },
  ref
) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="mb-4">
      <Primarytext size="sm">{label}</Primarytext>
      <input
        ref={ref}
        type={"text"}
        className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mb-2 mt-1">{error}</p>}
    </div>
  );
};
