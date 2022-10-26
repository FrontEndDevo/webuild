import {
  firstService,
  secondService,
  thirdService,
  fourthService,
  fifthService,
  sixthService,
} from "./Importer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <h2>
        we provide <span>the best</span>construction services
      </h2>
      <div className="services">
        <div className="service">
          <img src={firstService} alt="" />
          <div className="info">
            <FontAwesomeIcon icon={faBuildingUser} />
            <h4>Building consttuction</h4>
            <p>
              Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut
              amet sed erat sed sed amet magna elitr amet kasd diam duo
            </p>
            <button>
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
