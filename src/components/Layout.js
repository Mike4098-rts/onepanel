import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Status from "./Status";
const Layout = () => {
  return (
    <div>
      <Navigation />
      <main className="relative">
        <Outlet />
      </main>
      <Status />
    </div>
  );
};

export default Layout;
