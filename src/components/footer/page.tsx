import React from "react";
import Link from "next/link";
import Image from "next/image";
import riot from "@/assets/images/riot.png";
import small_logo from "@/assets/images/small-logo.png";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className=" flex justify-center items-center h-16">
        <Link className=" " href="https://www.riotgames.com/en">
          <Image
            src={riot}
            width={100}
            height={100}
            alt="riot logo"
            className=" mx-2"
          />
        </Link>
        <Link className=" " href="/">
          <Image
            src={small_logo}
            width={90}
            height={90}
            alt="riot logo"
            className=" mx-2"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
