import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerIcons } from "../../Helpers/WebsiteData";
import SingleLink from "./SingleLink/SingleLink";

const Footer = () => {
  const ourLinks = [
    "Home",
    "About Us",
    "Our Service",
    "Meet The Team",
    "Contact Us",
  ];

  const allLinks = (
    <ul className="text-gray-400">
      {ourLinks.map((link) => (
        <SingleLink link={link} icon={footerIcons.faAngleRight} />
      ))}
    </ul>
  );

  return (
    <div className="footer bg-gray-900 text-white">
      <div className="top-side px-12 py-24 flex gap-32">
        <div className="R-H-S flex-1 flex flex-col gap-6 justify-center">
          <div className="flex text-6xl gap-2">
            <FontAwesomeIcon
              icon={footerIcons.faBuilding}
              className="text-orange-700"
            />
            <h1 className="font-bold uppercase ml-4">webuild</h1>
          </div>
          <p className="text-gray-400">
            Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
            nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
            erat dolore sed stet justo et dolor.
          </p>
          <div className="contact flex flex-col gap-4">
            <div className="info flex gap-2 text-gray-500">
              <FontAwesomeIcon icon={footerIcons.faLocationDot} />
              <p>123 Street, New York, USA</p>
            </div>
            <div className="info flex gap-2 text-gray-500">
              <FontAwesomeIcon icon={footerIcons.faPhone} />
              <p>+012 345 67890</p>
            </div>
            <div className="info flex gap-2 text-gray-500">
              <FontAwesomeIcon icon={footerIcons.faEnvelope} />
              <p>info@example.com</p>
            </div>
          </div>
          <div className="social flex gap-2">
            <FontAwesomeIcon
              className="cursor-pointer bg-orange-600 p-3 text-2xl duration-300 hover:text-black"
              icon={footerIcons.faTwitter}
            />
            <FontAwesomeIcon
              className="cursor-pointer bg-orange-600 p-3 text-2xl duration-300 hover:text-black"
              icon={footerIcons.faFacebook}
            />
            <FontAwesomeIcon
              className="cursor-pointer bg-orange-600 p-3 text-2xl duration-300 hover:text-black"
              icon={footerIcons.faLinkedin}
            />
            <FontAwesomeIcon
              className="cursor-pointer bg-orange-600 p-3 text-2xl duration-300 hover:text-black"
              icon={footerIcons.faInstagram}
            />
          </div>
        </div>

        <div className="L-H-S flex flex-col justify-center items-center gap-12 flex-1">
          <div className="up-level flex items-center w-full">
            <div className="left-side flex-1">
              <h3 className="text-2xl uppercase mb-6 font-bold">Quick links</h3>
              {allLinks}
            </div>
            <div className="right-side flex-1">
              <h3 className="text-2xl uppercase mb-6 font-bold">
                Popular links
              </h3>
              {allLinks}
            </div>
          </div>
          <div className="down-level w-full">
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="email" className="font-bold text-2xl uppercase">
                  Newsletter
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-4/5 px-8 py-4 text-gray-600 focus:outline-orange-500"
                />
                <button className="px-8 py-4 bg-orange-600 text-white uppercase">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-side">
        <p>
          &copy; <span> We Build.</span>All Rights Reserved.
        </p>
        <p>
          <span>Designed by</span> FrontEndDevo
        </p>
      </div>
    </div>
  );
};

export default Footer;
