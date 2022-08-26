import FeatherIcon from "feather-icons-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TokenContext from "../contexts/Tokencontext";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  function openHandler() {
    setIsOpen(!isOpen);
  }
  const {setToken} = useContext(TokenContext)
    function signout() {
		setToken(null)
		window.location.href("/")
	}

  return (
    <div>
      {isOpen && (
        <ul className="bg-background flex flex-col items-center w-48 rounded-br-xl rounded-tr-xl absolute z-10">
          <h1 className="font-bold">Guva Enterprise</h1>
          
            <li className="font-semibold">
            <Link to="/stats">STATISTIC</Link>
            </li>
            
          <li className="font-semibold">
            
            <Link to="/users">
            USERS
            </Link>
            </li>
          <li className="font-semibold">
            <Link to="/catalog">
            CATALOG
            </Link>
            </li>
          <li className="font-semibold">
            <Link to="/">
            LOGS
            </Link>
            
            </li>
          <li className="flex">
            <FeatherIcon icon="user" />
            <button onClick={signout} className="font-semibold">LOG OUT</button>
          </li>
        </ul>
      )}

      <button
        onClick={openHandler}
        className={`text-black bg-background rounded-tr-3xl rounded-br-3xl top-10 absolute z-10 ${isOpen ? "rotate-180 top-10" : ""}`}
      >
        <FeatherIcon icon="arrow-right" size="40" />
      </button>
    </div>
  );
};

export default Navigation;
