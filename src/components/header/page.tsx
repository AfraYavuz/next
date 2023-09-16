import React from "react";
import Link from "next/link";
import Image from "next/image";
import riot from "@/assets/images/riot.png";

const Header = () => {
  return (
    <nav className=" sticky top-0 z-50 bg-black flex justify-between items-center h-20 p-3 ">
      <Link className=" ml-2" href="https://www.riotgames.com/en">
        <Image src={riot} width={100} height={100} alt="riot logo" />
      </Link>
      <p className="text-slate-500 hover:text-red-600 ml-4 ">VALORANT</p>
      <ul className=" flex gap-10 list-none text-white">
        <li>
          <Link href="/agents">Agents</Link>
        </li>
        <li>
          <Link href="/maps">Maps</Link>
        </li>
        <li>
          <Link href="/weapons">Weapons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
