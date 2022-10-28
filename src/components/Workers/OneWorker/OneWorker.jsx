import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import WorkerOne from "../../../assets/images/workerone.jpg";
import WorkerTwo from "../../../assets/images/workertwo.jpg";

const allWorkers = [
  { name: "Adam Philips", job: "CEO & Founder", img: WorkerOne },
  { name: "Dylan Adams", job: "Civil Engineer", img: WorkerTwo },
  { name: "Jhon Doe", job: "Interior Designer", img: WorkerOne },
  { name: "Josh Dunn", job: "Painter", img: WorkerTwo },
];

const OneWorker = () => {
  // Split social icons here:
  const socialMedia = (
    <div className="social">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
  // Mapping on all workers and then return them below.
  const workersArray = allWorkers.map((worker) => (
    <div className="worker">
      <div className="person">
        <img src={worker.img} alt={worker.name} />
        {socialMedia}
      </div>
      <div className="details">
        <h3>{worker.name}</h3>
        <p>{worker.job}</p>
      </div>
    </div>
  ));

  return { workersArray };
};

export default OneWorker;
