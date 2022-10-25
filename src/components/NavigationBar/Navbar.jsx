import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Here we're gonna define all the big classes to keep JSX lean
  const linkClasses = `${(navData) =>
    navData.isActive
      ? "text-orange-500"
      : ""}  hover:text-orange-500 duration-200`;

  return (
    <div className="flex bg-gray-900 justify-between items-center py-3 text-white uppercase fixed w-full px-14">
      <div className="flex text-5xl gap-2">
        <FontAwesomeIcon icon={faBuilding} className="text-orange-700" />
        <h1 className="">webuild</h1>
      </div>
      <ul className="flex gap-12  text-lg">
        <li>
          <NavLink to="/home" className={linkClasses}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClasses}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className={linkClasses}>
            service
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClasses}>
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
