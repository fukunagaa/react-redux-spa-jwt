import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";

const NavBar = ({ location }) => {
  const homeClass = location.pathname === "/" ? "active" : "";
  const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
  const userClass = location.pathname.match(/^\/user/) ? "active" : "";
  const adminClass = location.pathname.match(/^\/admin/) ? "active" : "";
  const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
  return (
    <nav>
      <ul>
        <li className={homeClass}>
          <Link to="/">Home</Link>
        </li>
        <li className={aboutClass}>
          <Link to="/about">abort</Link>
        </li>
        <li className={userClass}>
          <Link to="/user">user</Link>
        </li>
        <li className={adminClass}>
          <Link to="/admin">admin</Link>
        </li>
        <li className={"login " + loginClass}>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
