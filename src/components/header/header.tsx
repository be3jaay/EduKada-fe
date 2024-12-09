"use client";
import { Button } from "../ui";
import { HeaderLinks } from "@/constant/Link";
import { useOpenSideBar } from "@/hooks/useOpenSidebar";
import { SideBar } from "./sidebar/sidebar";
import Link from "next/link";

export const Header: React.FC = () => {
  const { ToggleSidebar, isSidebarOpen } = useOpenSideBar();

  return (
    <div className="w-full px-4 sm:px-20 py-5 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg fixed">
      <div className="w-full flex items-center justify-between">
        <div className="hidden md:flex">
          <Button className="bg-primary hover:bg-primary/90">LOGO</Button>
        </div>

        <div className="hidden md:flex gap-10 justify-center items-center">
          {HeaderLinks.length > 0 &&
            HeaderLinks.map((links, index) => (
              <div className="flex-row text-white" key={index}>
                <Link href={links.url} className="text-[1.2rem]">
                  {links.title}
                </Link>
              </div>
            ))}
        </div>

        {/* Mobile Menu ICON */}
        <button
          className="block md:hidden text-2xl text-white focus:outline-none pl-10"
          onClick={ToggleSidebar}
        >
          ☰
        </button>

        {isSidebarOpen && <SideBar onClose={ToggleSidebar} />}

        <div className="hidden sm:flex">
          <Button className="bg-primary hover:bg-primary/90">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
};
