import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__tabs">
        <li className="nav__tab">
          <Link className="nav__tab_style-reset" to="/about">
            about
          </Link>
        </li>
        <li className="nav__tab">
          <Link className="nav__tab_style-reset" to="/projects">
            projects
          </Link>
        </li>
        <li className="nav__tab">
          <Link className="nav__tab_style-reset" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
