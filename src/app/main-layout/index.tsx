"use client";

import { ReactNode, useEffect } from "react";

import SideMenu from "../../components/side-menu";
import { useRouter } from "next/navigation";
import { ADMIN_ROUTES } from "@/constants/routes";
const isAuthenticated = () => {
  const userEmail = sessionStorage.getItem("email");
  return userEmail !== null;
};

interface DashbaordPageProps {
  children: ReactNode;
}

const DashbaordPage: React.FC<DashbaordPageProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push(ADMIN_ROUTES.LOGIN.absolutePath);
    }
  }, []);
  return (
    <section className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 h-full bg-white">
        <SideMenu />
      </div>
      <div className="col-span-10 bg-gray-200 ">{children}</div>
    </section>
  );
};

export default DashbaordPage;
