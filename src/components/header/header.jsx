import React from "react";
import { Link, Route } from "react-router-dom";

import NavigationMenu from "../navigation-menu/navigation-menu";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Route>
        <Link to="/">
          <h1 className="title">
            World <br />
            art
          </h1>
        </Link>
      </Route>
      <NavigationMenu />
    </div>
  );
};

export default Header;
