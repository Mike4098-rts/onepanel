import FeatherIcon from "feather-icons-react";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  function openHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {isOpen && (
        <ul className="bg-background flex flex-col items-center w-48 rounded-br-xl rounded-tr-xl">
          <h1 className="font-bold">Guva Enterprise</h1>
          <li className="font-semibold">STATISTIC</li>
          <li className="font-semibold">USERS</li>
          <li className="font-semibold">CATALOG</li>
          <li className="font-semibold">LOGS</li>
          <li className="flex">
            <FeatherIcon icon="user" />
            <button className="font-semibold">LOG OUT</button>
          </li>
        </ul>
      )}

      <button
        onClick={openHandler}
        className="text-black bg-background rounded-tr-3xl rounded-br-3xl top-10 absolute z-10"
      >
        <FeatherIcon icon="arrow-right" size="40" />
      </button>
    </div>
  );
};

export default Navigation;
