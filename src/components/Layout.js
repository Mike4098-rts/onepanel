

import Navigation from "./Navigation"
import { Outlet } from "react-router-dom"
const Layout = () => {
    
   
    return ( <div>

        <Navigation/>
        <main className="relative">
            <Outlet/>
        </main>

    </div> );
}
 
export default Layout;