import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/About"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Service"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Post/js/react"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            React
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/login"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
