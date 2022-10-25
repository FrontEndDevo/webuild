// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVolcano, faBuilding } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Navbar = () => {

  // Here we're gonna define all big classes to keep JSX lean
  const isLinkActive = (navData) => (navData.isActive ? "text-orange-600" : "");

  return (
    <div className="navbar">
      <div className="title">
        <i></i>
        <h1>webuild</h1>
      </div>
      <ul className="links">
        <li>
          <NavLink to="/home" className={isLinkActive}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={isLinkActive}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className={isLinkActive}>
            service
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={isLinkActive}>
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
