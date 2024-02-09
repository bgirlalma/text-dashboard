import SideBar from "pages/sideBar";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <div>
            <SideBar />
            <Outlet/>
      </div>
  )
};
