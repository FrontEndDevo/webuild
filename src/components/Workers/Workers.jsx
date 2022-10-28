import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Workers = () => {
  return (
    <div>
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        We are
        <span className="text-orange-500">
          {" "}
          professional &<br /> expert{" "}
        </span>
        workers
      </h2>
      <div className="workers">
        <div className="worker">
          <div className="person">
            <img src="" alt="" />
            <div className="social"></div>
          </div>
          <div className="details">
            <h3>Adam Philips</h3>
            <p>CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workers;
