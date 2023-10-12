"use client";
import React, { FC, ReactNode } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { usePathname } from "next/navigation";
import { Routes } from "@/utils/enums/enums";

type Props = {
  children?: ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`flex-grow ${pathname === Routes.Weapons && "bg-white"}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
