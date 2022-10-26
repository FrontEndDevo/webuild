import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleService = (props) => {
  const { image, icon, title, description } = props;
  return (
    <div className="service">
      <img src={image} alt={title} />
      <div className="info">
        <FontAwesomeIcon icon={icon} />
        <h4>{title}</h4>
        <p>{description}</p>
        <button>
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SingleService;
