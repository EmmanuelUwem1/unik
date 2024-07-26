import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function OptionsBar() {
  return (
    <div className="options-bar">
      <NavLink to="products" className="btn-large">
        Fashions
      </NavLink>
      <NavLink to="products" className="btn-large">
        Arts
      </NavLink>
      <NavLink to="products" className="btn-large active">
        Start Here
      </NavLink>
    </div>
  );
}

export default OptionsBar;
