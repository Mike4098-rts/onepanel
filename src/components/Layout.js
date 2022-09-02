import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Status from "./Status";
const Layout = () => {
  return (
    <div className="xl:flex">
      <Navigation />
      <main className="">
        <Outlet />
      </main>
      <Status />
    </div>
  );
};

export default Layout;
