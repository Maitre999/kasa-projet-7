import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Error.module.css";
import linkStyle from "../components/Layout/Header.module.css";

// Error 'page' component
const errorPage = () => {
  return (
    <div className={classes["error-container"]}>
      <h1 className={classes.error}>404</h1>
      <p className={classes["error-message"]}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className={linkStyle["hover-underline-animation"]} to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default errorPage;
