import React from "react";
import Navbar from "./Navbar";

type LayoutProp = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
