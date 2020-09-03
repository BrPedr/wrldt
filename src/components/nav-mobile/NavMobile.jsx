import React from "react";
import { Link, Route } from "react-router-dom";

import "./NavMobile.css";

const NavMobile = () => {
  return (
    <nav className="nav-mobile">
      <ul className="nav-mobile-container">
        <li>
          <Route>
            <Link to="/">products</Link>
          </Route>
        </li>
        <li>
          <Route>
            <Link to="/artists">artists</Link>
          </Route>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
