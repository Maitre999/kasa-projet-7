import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

import Logo from "../UI/Logo";

// Color of the logo
const colorLogo = "#FF6060";

// Header component with the logo and the navigation links
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes["header"]}>
        <Logo className={classes.logo} fill={colorLogo} />
        <nav>
          <ul className={classes["link-nav"]}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${classes["hover-underline-animation"]} ${
                    isActive ? classes.active : undefined
                  }`
                }
                end
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${classes["hover-underline-animation"]} ${
                    isActive ? classes.active : undefined
                  }`
                }
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
