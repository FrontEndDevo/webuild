import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerIcons } from "../../Helpers/WebsiteData";

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-white">
      <div className="top-side px-12 py-24 flex">
        <div className="R-H-S flex-1">
          <div className="flex text-6xl gap-2">
            <FontAwesomeIcon
              icon={footerIcons.faBuilding}
              className="text-orange-700"
            />
            <h1 className="font-bold">webuild</h1>
          </div>
          <p>
            Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
            nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
            erat dolore sed stet justo et dolor.
          </p>
          <div className="contact">
            <div className="info">
              <FontAwesomeIcon icon={footerIcons.faLocationDot} />
              <p>123 Street, New York, USA</p>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={footerIcons.faPhone} />
              <p>+012 345 67890</p>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={footerIcons.faEnvelope} />
              <p>info@example.com</p>
            </div>
          </div>
          <div className="social">
            <FontAwesomeIcon icon={footerIcons.faTwitter} />
            <FontAwesomeIcon icon={footerIcons.faFacebook} />
            <FontAwesomeIcon icon={footerIcons.faLinkedin} />
            <FontAwesomeIcon icon={footerIcons.faInstagram} />
          </div>
        </div>
        <div className="L-H-S flex justify-around flex-1">
          <div className="up-level">
            <div className="left-side">
              <h3>Quick links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Service</li>
                <li>Meet The Team</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="right-side">
              <h3>Popular links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Service</li>
                <li>Meet The Team</li>
                <li>Contact Us</li>
              </ul>
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
