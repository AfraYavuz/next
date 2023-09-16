import React, { FC, ReactNode } from "react";
import Header from "../header/page";
import Footer from "../footer/page";

type Props = {
  children?: ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
