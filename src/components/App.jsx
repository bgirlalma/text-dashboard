import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import DashboardPage from "pages/dashboard";

export const App = () => {
  return (
    <div
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage/> }></Route>
        </Route>
      </Routes>
    </div>
  );
};
