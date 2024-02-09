import { GlobalStyled } from "globalstyled";
import { HomePage } from "pages/home";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <div>
            <HomePage/>
            <GlobalStyled/>
            <Outlet/>
      </div>
  )
};
