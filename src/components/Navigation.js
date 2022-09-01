import FeatherIcon from "feather-icons-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TokenContext from "../contexts/Tokencontext";
import { motion } from "framer-motion";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  function openHandler() {
    setIsOpen(!isOpen);
  }
  const { setToken } = useContext(TokenContext);
  function signout() {
    setToken(null);
    window.location.href("/");
  }

  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "string",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div>
      <div className="xl:hidden">
        {isOpen && (
          <motion.ul
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-background flex flex-col items-center w-48 rounded-br-xl rounded-tr-xl"
          >
            <h1 className="font-bold">Guva Enterprise</h1>

            <li className="font-semibold">
              <Link
                className="underline decoration-solid underline-offset-4"
                to="/stats"
              >
                STATISTIC
              </Link>
            </li>

            <li className="font-semibold  ">
              <Link
                className="underline decoration-solid underline-offset-4"
                to="/users"
              >
                USERS
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                className="underline decoration-solid underline-offset-4"
                to="/catalog"
              >
                CATALOG
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                className="underline decoration-solid underline-offset-4"
                to="/"
              >
                LOGS
              </Link>
            </li>
            <li className="flex">
              <FeatherIcon icon="user" />
              <button onClick={signout} className="font-semibold">
                LOG OUT
              </button>
            </li>
          </motion.ul>
        )}

        <button
          onClick={openHandler}
          className={`text-black bg-background rounded-tr-3xl rounded-br-3xl top-10 absolute z-10 ${
            isOpen ? "rotate-180 top-10" : ""
          }`}
        >
          <FeatherIcon icon="arrow-right" size="40" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
