import "./App.css";
import TokenContext from "./contexts/Tokencontext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Logs from "./pages/Logs";
import Layout from "./components/Layout";
import Stats from "./pages/Stats";
import Catalog from "./pages/Catalog";
import Users from "./pages/Users";

function App() {
  const [token, setToken] = useState(null)
  return (
    <TokenContext.Provider value={{token, setToken}}>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
            <Route index element={<Logs/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/catalog" element={<Catalog/>} />
            

          </Route> 
      </Routes>



      </BrowserRouter>

    </TokenContext.Provider>
      
    
  );
}

export default App;
