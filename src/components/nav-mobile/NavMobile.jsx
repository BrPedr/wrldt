import React from 'react';
import {Link, Switch} from "react-router-dom"

import './NavMobile.css'

const NavMobile = () => {
    return (
      <nav className="nav-mobile">
        <ul className="nav-mobile-container">
          <li>
            <Switch>
              <Link to="/">products</Link>
            </Switch>
          </li>
          <li>
            <Link to="/artists">artists</Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default NavMobile;