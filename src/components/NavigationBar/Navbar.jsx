import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Define the complex here to keep JSX lean ASAP:
  const navLinkClasses = (navLink) =>
    navLink.isActive ? "text-orange-500" : "hover:text-orange-500 duration-300";

  return (
    <div className="flex z-50 bg-gray-900 justify-between items-center py-4 text-white uppercase sticky top-0 w-full px-14">
      <div className="flex text-6xl gap-2">
        <FontAwesomeIcon icon={faBuilding} className="text-orange-700" />
        <h1 className="font-bold">webuild</h1>
      </div>
      <ul className="flex gap-12 text-xl mr-44">
        <li>
          <NavLink to="/home" className={navLinkClasses}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClasses}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className={navLinkClasses}>
            service
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClasses}>
            contact
          </NavLink>
        </li>
      </ul>
      <button className="bg-orange-600 p-6 absolute right-0 top-0 h-full text-xl uppercase">
        Get a quote <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Navbar;
