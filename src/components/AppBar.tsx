import { useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";


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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon onClick={() => setIsOpen(!isOpen)} />
            </DropdownMenuTrigger>
            {isOpen && (
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#services" className="text-slate-400">
                    Services
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="#contact" className="text-slate-400"> Contact us</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
