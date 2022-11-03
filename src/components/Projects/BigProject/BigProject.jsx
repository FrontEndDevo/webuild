import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BigProject = (props) => {
  const { img, title, address } = props;

  return (
    <div className="project">
      <img src={img} alt={title} />
      <Link to="/" className="details">
        <h3>{title}</h3>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{address}</span>
        </div>
      </Link>
    </div>
  );
};

export default BigProject;
