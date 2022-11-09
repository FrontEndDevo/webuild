import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BigProject = (props) => {
  const { img, title, address } = props;

  return (
    <div className="project relative">
      <img src={img} alt={title} className="h-full" />
      <Link to="/" className="details bg-white p-6 absolute -bottom-12 left-6 w-11/12">
        <h3 className="text-2xl uppercase font-bold mb-2">{title}</h3>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} className="text-orange-600 mr-2" />
          <span className="text-gray-500">{address}</span>
        </div>
      </Link>
    </div>
  );
};

export default BigProject;
