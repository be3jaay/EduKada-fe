import { HeaderLinks } from "@/constant/Link";
import Link from "next/link";

interface SideBarProps {
  onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ onClose }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-2/3 h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg text-white flex flex-col space-y-4 p-4 ">
        <button className="self-end text-xl" onClick={onClose}>
          ✕
        </button>
        {HeaderLinks.length > 0 &&
          HeaderLinks.map((links, index) => (
            <div className="flex-row text-white" key={index}>
              <Link href={links.url} className="text-[1.2rem]  ">
                {links.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};
