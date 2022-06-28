import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="ul_navbar">
        <Link to="/" className="li_navbar">
          <div className="a_navbar">Paintings </div>
        </Link>
        <Link to="/contact" className="li_navbar">
          <div className="a_navbar">Contact</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
