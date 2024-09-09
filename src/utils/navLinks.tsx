import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export const navLinks = [
    {
      key: "dashboard",
      icon: <RiDashboardHorizontalFill size={18} />,
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "subAdmin",
      icon: <GoPeople size={18} />,
      label: <Link href={"/sub-admin"}>Sub Admin</Link>
    },

    {
      key: "restaurantsMarket",
      icon: <GoPeople size={18} />,
      label: <Link href={"/restaurants-market"}>Restaurants & Market</Link>,
    },
    {
      key: "advertisement",
      icon: <GoPeople size={18} />,
      label: <Link href={"/advertisement"}>Advertisement</Link>,
    },
    {
      key: "vendors",
      icon: <GoPeople size={18} />,
      label: <Link href={"/vendors"}>Vendors</Link>,
    },
  ];
  