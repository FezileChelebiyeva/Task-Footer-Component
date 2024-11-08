import { Outlet } from "react-router-dom";
import { ReactNode } from "react";

const MainRoot = (): ReactNode => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainRoot;
