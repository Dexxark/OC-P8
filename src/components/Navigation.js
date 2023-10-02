import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="./img/Logo-kasa.png" alt="Logo de Kasa" />
      <ul>
        <NavLink to="/" className={(navigation) => (navigation.isActive ? "navigation-select" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(navigation) => navigation.isActive ? "navigation-select" : ""}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;