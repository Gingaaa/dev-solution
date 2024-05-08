import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default HomeLayout;
