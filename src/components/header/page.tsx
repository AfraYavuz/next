import React from "react";
import Link from "next/link";
import Image from "next/image";
import riot from "@/assets/images/riot.png";
import { routes } from "../router/router";
import { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <nav className="sticky top-0 z-[50] bg-black flex justify-between items-center h-20 py-3 px-5">
      <Link href="https://www.riotgames.com/en">
        <Image src={riot} width={100} height={100} alt="riot-logo" />
      </Link>
      <p className="text-slate-500 hover:text-red-600 transition-all duration-500 ease-in">
        VALORANT
      </p>

      <ul className="flex gap-10 list-none text-white">
        {Object.keys(routes)
          .filter((k) => !routes[k].hide || !routes[k].hide?.header)
          .map((r) => (
            <li key={routes[r].title}>
              <Link href={routes[r].route()}>{routes[r].title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Header;
