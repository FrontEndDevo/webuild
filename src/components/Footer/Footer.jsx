import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerIcons } from "../../Helpers/WebsiteData";
import SingleLink from "./Links/SingleLink";

const Footer = () => {
  const ourLinks = [
    "Home",
    "About Us",
    "Our Service",
    "Meet The Team",
    "Contact Us",
  ];

  const allLinks = (
    <ul>
      {ourLinks.map((link) => (
        <SingleLink link={link} />
      ))}
    </ul>
  );

  return (
    <div className="footer bg-gray-900 text-white">
      <div className="top-side px-12 py-24 flex">
        <div className="R-H-S flex-1 flex flex-col gap-6 justify-center">
          <div className="flex text-6xl gap-2">
            <FontAwesomeIcon
              icon={footerIcons.faBuilding}
              className="text-orange-700"
            />
            <h1 className="font-bold uppercase ml-4">webuild</h1>
          </div>
          <p className="text-gray-500">
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
              className="bg-orange-600 p-3 text-2xl"
              icon={footerIcons.faTwitter}
            />
            <FontAwesomeIcon
              className="bg-orange-600 p-3 text-2xl"
              icon={footerIcons.faFacebook}
            />
            <FontAwesomeIcon
              className="bg-orange-600 p-3 text-2xl"
              icon={footerIcons.faLinkedin}
            />
            <FontAwesomeIcon
              className="bg-orange-600 p-3 text-2xl"
              icon={footerIcons.faInstagram}
            />
          </div>
        </div>
        <div className="L-H-S flex flex-col justify-center items-center gap-12 flex-1">
          <div className="up-level flex gap-52">
            <div className="left-side">
              <h3 className="text-3xl uppercase mb-6">Quick links</h3>
              {allLinks}
            </div>
            <div className="right-side">
              <h3 className="text-3xl uppercase mb-6">Popular links</h3>
              {allLinks}
            </div>
          </div>
          <div className="down-level">
            <form>
              <label htmlFor="email">Newsletter</label>
              <input type="email" id="email" />
              <button>Sign up</button>
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
