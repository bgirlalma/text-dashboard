import { GlobalStyled } from "globalstyled";
import SideBar from "pages/sideBar";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <div>
            <SideBar />
            <GlobalStyled/>
            <Outlet/>
      </div>
  )
};
