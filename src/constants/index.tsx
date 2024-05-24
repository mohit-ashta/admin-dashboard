import { BsGrid } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { GiBanknote } from "react-icons/gi";
import { ADMIN_ROUTES } from "./routes";
export const AdminMenuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineBedroomParent size={20} />,
    path: ADMIN_ROUTES.RENT_ADVANCE.absolutePath,
  },
  {
    id: 2,
    title: "My Documents",
    icon: <GiBanknote size={20} />,
    path: ADMIN_ROUTES.RENT_DEFFERAL.absolutePath,
  },
  {
    id: 3,
    title: "All Course Finder",
    icon: <BsGrid size={20} />,
    path: ADMIN_ROUTES.JOB_LOSS_CLAIM.absolutePath,
  },
  {
    id: 4,
    title: "Settings",
    icon: <SlSettings size={20} />,
    path: ADMIN_ROUTES.SETTINGS.absolutePath,
  },
];
