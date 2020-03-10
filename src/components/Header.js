import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <p>Dashboard</p>
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      <p>Create</p>
    </NavLink>
  </header>
);

export default Header;
