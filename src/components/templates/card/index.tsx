import { cardDataProps } from "@/constants/types";
import React from "react";

const Card: React.FC<cardDataProps> = ({
  title,
  description,
  price,
  currency,
  image,
  brand
}) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-14">
      <div className="mb-3 max-h-[160px]">
        <img
          className="h-40 object-cover rounded-xl w-full"
          src={image}
          alt={title}
        />
      </div>
      <p className="text-xl leading-8 font-heading font-medium">{title}</p>
      <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
        <h4 className="text-base pr-2">{description}</h4>
        <h4 className="text-base pr-2">{brand}</h4>
        <span>
          {currency}-{price}
        </span>
      </p>
    </div>
  );
};

export default Card;
