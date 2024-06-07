
"use client";

import { ReactNode } from "react";

import SideMenu from "../../molecules/side-menu";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
interface DashbaordPageProps {
  children: ReactNode;
}

const DashbaordPage: React.FC<DashbaordPageProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 h-full bg-white">
        <SideMenu />
      </div>
      <div className="col-span-10 bg-gray-200 ">
        <div className="pt-5  bg-blueGray-100">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center mb-10 xl:mb-0">
              <div className="mr-6">
                <Link
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>Home</span>
                  <MdKeyboardArrowRight size={17} />
                </Link>
              </div>
              <div className="mr-6">
                <Link
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>Store</span>
                  <MdKeyboardArrowRight size={17} />
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  href="#"
                >
                  Trending
                </Link>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default DashbaordPage;
