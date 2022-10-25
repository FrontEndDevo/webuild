import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import about from "../../assets/images/about-min.jpg";
import signature from "../../assets/images/signature.jpg";

const About = () => {
  return (
    <div className="flex gap-12 justify-center items-center p-8 my-24">
      <div className="text w-3/5">
        <h3 className="uppercase text-5xl font-bold">
          We are <span className="text-orange-600 ">the leader</span> in
          construction industry
        </h3>
        <h5 className="uppercase font-bold text-gray-600 text-2xl my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          possimus esse porro error dolorem.
        </h5>
        <p className="my-4 text-gray-500">
          Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
          diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
          diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed
          stet no labore lorem sit. Sanctus clita duo justo et tempor
        </p>
        <div className="skills grid grid-cols-2 gap-3 my-7 text-gray-500 font-bold">
          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>Perfect Planning</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>Perfect Planning</span>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>Professional workers</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>Professional workers</span>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>First Working Process</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-4" />
            <span>First Working Process</span>
          </div>
        </div>
        <p className="my-4 text-gray-500">
          Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
          diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
          diam et eos labore
        </p>
        <img src={signature} alt="" />
      </div>
      <img
        src={about}
        alt="worker-in-about-section"
        className=" h-96 w-2/5 max-h-full max-w-full"
      />
    </div>
  );
};

export default About;
