import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="R-H-S">
        <div className="flex text-6xl gap-2">
          <FontAwesomeIcon icon={faBuilding} className="text-orange-700" />
          <h1 className="font-bold">webuild</h1>
        </div>
        <p>
          Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.
          Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore
          sed stet justo et dolor.
        </p>
        <div className="contact">
          <div className="info">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>123 Street, New York, USA</p>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faPhone} />
            <p>+012 345 67890</p>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
