import logo from "../assets/logo.png"
import { Button } from "./ui/button"

export const AppBar = () => {
    return(
        <>
            <div className="flex justify-between items-center px-14 font-normal tracking-normal top-0 sticky bg-white ">
                <div>
                    <a href="/"><img src={logo} className="w-24 h-24 cursor-pointer"/></a>
                </div>
                <div>
                    <ul className="flex gap-3 cursor-pointer text-lg font-medium items-center pr-8.5">
                        <li className="hover:text-slate-400"><a href="#services">Services</a></li>
                        {/* <li className="hover:text-slate-400"><a href="#">About us</a></li> */}
                        <li className="hover:text-slate-400">
                        <Button className="bg-gradient-to-r from-red-900 to-red-900"> Contact us</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}