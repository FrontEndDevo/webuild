import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OneWorker = (props) => {
  // Split social icons here:
  const socialMedia = props.socialMedia.map((social) => (
    <FontAwesomeIcon icon={social.icon} />
  ));

  return (
    <div className="worker">
      <div className="person">
        <img src={props.eachWorker.img} alt={props.eachWorker.name} />
        <div className="social">{socialMedia}</div>
      </div>
      <div className="details">
        <h3>{props.eachWorker.name}</h3>
        <p>{props.eachWorker.job}</p>
      </div>
    </div>
  );
};

export default OneWorker;
