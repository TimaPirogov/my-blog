import React from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/images/left-arrow.svg";
import './LogOut.css'

const LogOut = ( {setIsLoggedIn}) => {
  const logOut = () => setIsLoggedIn(false)
  return (
    <section className="sidebarBottom">
      <button onClick={logOut}>
        <ArrowLeftIcon height={25} width={25} />
        Выход
      </button>
    </section>
  );
};

export default LogOut;