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
    path: ADMIN_ROUTES.DASHBOARD.absolutePath,
  },
  {
    id: 2,
    title: "Profile",
    icon: <GiBanknote size={20} />,
    path: ADMIN_ROUTES.SETTINGS.absolutePath,
  },
  {
    id: 3,
    title: "Add Product",
    icon: <BsGrid size={20} />,
    path: ADMIN_ROUTES.ADDPRODUCT.absolutePath,
  },
  {
    id: 4,
    title: "Settings",
    icon: <SlSettings size={20} />,
    path: ADMIN_ROUTES.SETTINGS.absolutePath,
  },
];