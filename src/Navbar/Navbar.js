import React from "react";
import { useHistory } from "react-router-dom";
import NavbarScreen from "./NavbarScreen";

const Navbar = () => {
  const history = useHistory();
  function handleLogout() {
    localStorage.getItem("user") && localStorage.removeItem("user");
    localStorage.getItem("cart") && localStorage.removeItem("cart");
    localStorage.getItem("id") && localStorage.removeItem("id");
    history.push("/login");
    window.location.reload();
  }
  return (
    <>
      <NavbarScreen handleLogout={handleLogout} />
    </>
  );
};

export default Navbar;
