import React from "react";

import {Link} from "react-router-dom";

import "./navigation-menu.css";

const NavigationMenu = () => {
  return (
    <div className="nav-menu-container">
      <nav className="nav-menu">
        <ul className="nav-menu">
          <li>
            <Link className="navJoin" to="/join">
              join
            </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/artists">artists</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          {/* <li>
            <Link to="/shop">shop</Link>
          </li> */}
        </ul>
      </nav>
      <nav className="nav-profile">
        <i className="search icon large"></i>
        <Link to="/cart">
          <i className="shopping cart icon large link" />
        </Link>
        <Link to="/sign-in">
          <i className="user icon large link " />
        </Link>
      </nav>
    </div>
  );
};

export default NavigationMenu;
