import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./NavMobile.css";

const NavMobile = () => {
  return (
    <nav className="nav-mobile">
      <ul className="nav-mobile-container">
        <li>
          <Switch>
            <Route>
              <Link to="/wrldt">products</Link>
            </Route>
          </Switch>
        </li>
        <li>
          <Switch>
            <Route>
              <Link to="/wrldt/artists">artists</Link>
            </Route>
          </Switch>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
