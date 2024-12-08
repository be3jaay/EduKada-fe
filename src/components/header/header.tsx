import { Button } from "../ui";
import Link from "next/link";
import { HeaderLinks } from "@/constant/Link";

export const Header: React.FC = () => {
  return (
    <div className="w-full px-20 py-5 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-lg shadow-lg fixed ">
      <div className="w-full flex flex-wrap justify-center sm:justify-between ">
        <div className="flex-wrap justify-between hidden md:flex">
          <Button className="bg-primary hover:bg-primary/90">LOGO</Button>
        </div>

        <div className="flex gap-10 justify-center items-center ">
          {HeaderLinks.length > 0 &&
            HeaderLinks.map((links, index) => (
              <div className="flex-row text-white" key={index}>
                <Link href={links.url} className="text-[1.2rem]  ">
                  {links.title}
                </Link>
              </div>
            ))}
        </div>

        <div className="flex-wrap justify-between hidden sm:flex ">
          <Button className=" bg-primary hover:bg-primary/90">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
};
