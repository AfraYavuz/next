import Image from "next/image";
import React from "react";
import logo from "../assets/images/logo-2.jpg";
import agent from "../assets/images/agents.png";

const Home: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen relative">
      <Image
        alt="logo"
        src={logo}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={agent} // Üstte görünecek resim
          alt="Üst Resim"
          width={800}
          height={500}
        />
      </div>
    </div>
  );
};

export default Home;
