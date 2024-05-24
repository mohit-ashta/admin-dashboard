"use client";

import { AdminMenuItems } from "@/constants";
import { MenuItem } from "../menu-items";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideMenu = () => {
  return (
    <div className="p-8 text-center border-r h-full">
      <div className="pl-3 pb-10">
        <Image height={33} width={150} alt="main logo" src={"/next.svg"} />
      </div>
      {AdminMenuItems.map((item, id) => (
        <MenuItem
          path={item.path}
          key={id}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default SideMenu;
