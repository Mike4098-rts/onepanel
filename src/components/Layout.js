import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Status from "./Status";
const Layout = () => {
  return (
    <div className="">
      <Navigation />
      <main className="mb-6">
        <Outlet />
      </main>
      <Status />
    </div>
  );
};

export default Layout;
