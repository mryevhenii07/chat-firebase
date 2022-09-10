import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: "bg-gray-800 h-20 flex justify-between items-center p-4",
  heading: "text-white text-3xl",
};

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default NavBar;
