import React from "react";

import { Link, Route } from "react-router-dom";

import "./navigation-menu.css";

const NavigationMenu = () => {
  return (
    <div className="nav-menu-container">
      <nav className="nav-menu">
        <ul className="nav-menu">
          <li>
            <Route>
              <Link className="navJoin" to="/join">
                join
              </Link>
            </Route>
          </li>
          <li>
            <Route>
              <Link to="/about">about</Link>
            </Route>
          </li>
          <li>
            <Route>
              <Link to="/artists">artists</Link>
            </Route>
          </li>
          <li>
            <Route>
              <Link to="/contact">contact</Link>
            </Route>
          </li>
          {/* <li>
            <Link to="/shop">shop</Link>
          </li> */}
        </ul>
      </nav>
      <nav className="nav-profile">
        <i className="search icon large"></i>
        <Route>
          <Link to="/cart">
            <i className="shopping cart icon large link"></i>
          </Link>
        </Route>
        <Route>
          <Link to="/sign-in">
            <i className="user icon large link "></i>
          </Link>
        </Route>
      </nav>
    </div>
  );
};

export default NavigationMenu;
