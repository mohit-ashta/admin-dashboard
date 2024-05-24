"use client";

import { Primarytext } from "@/components/primary-text/page";
import DashbaordPage from "../main-layout";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconText } from "@/components/icon-text/page";
import { useRouter } from "next/navigation";
import { ADMIN_ROUTES } from "@/constants/routes";
const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    router.push(ADMIN_ROUTES.LOGIN.absolutePath);
  };

  return (
    <>
      <DashbaordPage>
        <div className="text-center pt-10 pb-5">
          <Primarytext>Settings</Primarytext>
        </div>
        <div className="p-8  font-medium md:w-1/2 md:mx-auto  bg-white h-full md:h-auto md:rounded-xl">
          <div className="text-black">
            <div className="flex justify-between mb-2">
              <h3 className="text-xl md:font-semibold font-medium ">Profile</h3>
              <button
                onClick={handleLogout}
                className="text-lg underline font-medium"
              >
                LogOut
              </button>
            </div>
            <IconText
              title="Personal Info"
              icon={<MdKeyboardArrowRight color="dark" size={20} />}
            />
            <h3 className="text-xl md:font-semibold font-medium mt-6 mb-1">
              Notifications
            </h3>
            <IconText
              title="Notification Preferences"
              icon={<MdKeyboardArrowRight color="dark" size={20} />}
            />
            <h3 className="text-xl md:font-semibold font-medium mt-6 mb-1">
              Support
            </h3>
            <IconText title="contactus@scholarearth.com" />
          </div>
        </div>
      </DashbaordPage>
    </>
  );
};

export default Settings;
