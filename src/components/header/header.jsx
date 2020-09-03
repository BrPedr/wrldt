import React from "react";
import { Link } from "react-router-dom";

import NavigationMenu from "../navigation-menu/navigation-menu";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="title">
          World <br />
          art
        </h1>
      </Link>
      <NavigationMenu />
    </div>
  );
};

export default Header;
