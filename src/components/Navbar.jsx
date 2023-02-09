import * as React from "react";
import { Link } from "gatsby";
import { navbar } from './navbar.module.css'
const Navbar = () => {
  return (
    <nav className={navbar}>
      <ul>
        <li> <Link to="/roam/IT" >IT</Link> </li>
        <li> <Link to="/roam/medic" >Medic</Link> </li>
        <li> <Link to="/roam/reading" >Reading</Link> </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
