import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../App.css";

function Header() {
  const [HamMenuIsOpen, setHamMenu] = useState(false);
  function ToggleHamMenu() {
    setHamMenu(!HamMenuIsOpen);
  }
  return (
    <header>
      <nav>
        <Link to="/" className="logo"></Link>

        <div className={HamMenuIsOpen ? "navlinks open" : "navlinks"}>
          <NavLink to="/products" onClick={ToggleHamMenu}>
            Courses
          </NavLink>
          <NavLink to="/" onClick={ToggleHamMenu}>
            Community
          </NavLink>
          <NavLink to="/products" onClick={ToggleHamMenu}>
            Products
          </NavLink>
          <NavLink to="/" onClick={ToggleHamMenu}>
            About
          </NavLink>
        </div>
      </nav>

      <div className="header-btns">
        <Link to="/products" className="btn">
          Start Here
        </Link>
        <div
          className={HamMenuIsOpen ? "ham-menu-icon active" : "ham-menu-icon"}
          onClick={ToggleHamMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <div className="close-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
