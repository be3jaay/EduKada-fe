import { Button } from "../ui";
import Link from "next/link";
import { HeaderLinks } from "@/constant/Link";

export const Header: React.FC = () => {
  return (
    <div className="w-full px-20 py-5 bg-primary rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.7px] border border-[rgba(35,17,35,0.67)] fixed ">
      <div className="w-full flex flex-wrap justify-center sm:justify-between ">
        <div className="flex-wrap justify-between hidden md:flex">
          <Button className="hover:bg-primary/90">LOGO</Button>
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
          <Button className=" hover:bg-primary/90">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
};
