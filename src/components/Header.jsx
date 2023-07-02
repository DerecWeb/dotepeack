import MenuItem from "@/components/MenuItem";
import { FaBeer } from 'react-icons/fa';
import Home from "@/app/page";
import {AiFillHome} from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwith";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
        <MenuItem title="ABOUT" address="/about" Icon={FcAbout}/>
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href="/">
          <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded-xl mr-1">IMDB</span><span className="text-2xl hidden sm:inline">CLONE</span></h2>
        </Link>
      </div>
    </div>
  )
}