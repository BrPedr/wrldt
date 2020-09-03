import React from "react";

import { Link, Route, Switch } from "react-router-dom";

import "./navigation-menu.css";

const NavigationMenu = () => {
  return (
    <div className="nav-menu-container">
      <nav className="nav-menu">
        <ul className="nav-menu">
          <li>
            <Switch>
              <Route>
                <Link className="navJoin" to="/join">
                  join
                </Link>
              </Route>
            </Switch>
          </li>
          <li>
            <Switch>
              <Route>
                <Link to="/about">about</Link>
              </Route>
            </Switch>
          </li>
          <li>
            <Switch>
              <Route>
                <Link to="/artists">artists</Link>
              </Route>
            </Switch>
          </li>
          <li>
            <Switch>
              <Route>
                <Link to="/contact">contact</Link>
              </Route>
            </Switch>
          </li>
          {/* <li>
            <Link to="/shop">shop</Link>
          </li> */}
        </ul>
      </nav>
      <nav className="nav-profile">
        <i className="search icon large"></i>
        <Switch>
          <Route>
            <Link to="/cart">
              <i className="shopping cart icon large link"></i>
            </Link>
          </Route>
        </Switch>
        <Switch>
          <Route>
            <Link to="/sign-in">
              <i className="user icon large link "></i>
            </Link>
          </Route>
        </Switch>
      </nav>
    </div>
  );
};

export default NavigationMenu;
