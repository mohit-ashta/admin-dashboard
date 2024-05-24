"use-client";
import { useState } from "react";
import { Primarytext } from "../primary-text/page";

interface CardProps {
  title?: string;
  para?: string;
  phoneNumber?: string;
  number?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({
  title,
  para,
  phoneNumber,
  number,
  onClick,
}) => {
  return (
    <div className="rounded-lg bg-white border  border-l-4 border-l-red-300  px-4 py-5  ">
      <div className="flex justify-between ">
        <div className="flex gap-10 cursor-pointer " onClick={onClick}>
          <div className="flex flex-col items-start justify-center text-xs font-normal gap-3">
            <Primarytext size="lg">{phoneNumber}</Primarytext>
            <Primarytext size="sm">{para}</Primarytext>
          </div>
          <div className="flex flex-col items-start  text-xs font-normal justify-between">
            <Primarytext size="lg">{title}</Primarytext>
            <Primarytext size="sm">{number}</Primarytext>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-end mt-2">
          <button className="px-4 py-2 border rounded-full bg-green-300 text-green-800">
            Accept
          </button>
          <button className="px-4 py-2 border rounded-full bg-red-300 text-red-800">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
