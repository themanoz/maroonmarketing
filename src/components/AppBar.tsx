import { useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-14 font-normal tracking-normal top-0 sticky bg-white ">
        <div>
          <a href="/">
            <img src={logo} className="w-24 h-24 cursor-pointer" alt="Logo" />
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3 cursor-pointer text-lg font-medium items-center pr-8.5 tracking-tight">
            <li className="hover:text-slate-400">
              <a href="#services">Services</a>
            </li>
            {/* <li className="hover:text-slate-400"><a href="#">About us</a></li> */}
            <li className="hover:text-slate-400">
              <Button className="bg-gradient-to-r from-red-900 to-red-900 ">
                {" "}
                Contact us
              </Button>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <MenuIcon onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-md p-4">
              <ul className="py-2">
                <li className="hover:text-slate-400">
                  <a href="#services">Services</a>
                </li>
                {/* <li className="hover:text-slate-400"><a href="#">About us</a></li> */}
                <li className="hover:text-slate-400">
                  <Button className="bg-gradient-to-r from-red-900 to-red-900 ">
                    {" "}
                    Contact us
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
