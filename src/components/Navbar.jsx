import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li> <Link to="/it">IT</Link> </li>
        <li>Medic</li>
        <li>Reading</li>
        <li>
          <Link to="/about">Abou Me</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
