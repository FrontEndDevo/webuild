import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const BigProject = (props) => {
  const [isDivHover, setIsDivHover] = useState(false);

  const { img, title, address } = props;

  const enterHoverProjectHandler = () => {
    setIsDivHover(true);
  };

  const leaveHoverProjectHandler = () => {
    setIsDivHover(false);
  };

  console.log(`Hover`);

  return (
    <div
      onMouseEnter={enterHoverProjectHandler}
      onMouseLeave={leaveHoverProjectHandler}
      className="project relative"
    >
      <div className="image h-full">
        <img src={img} alt={title} className="h-full" />
        <div
          className={`bg-gray-900 duration-500 opacity-70 absolute top-0
        right-0 ${isDivHover ? "w-1/2" : "w-0"} h-full z-20`}
        ></div>
        <div
          className={`bg-gray-900 duration-500 opacity-70 absolute top-0
        left-0 ${isDivHover ? "w-1/2" : "w-0"} h-full z-20`}
        ></div>
      </div>
      <FontAwesomeIcon
        icon={faPlus}
        className={`text-white text-8xl cursor-pointer absolute top-1/3 right-60 z-50 duration-100 delay-500 ${
          isDivHover ? "opacity-100" : "opacity-0"
        }`}
      />
      <Link
        to="/"
        className="details bg-white p-6 absolute -bottom-12 left-6 w-11/12 z-40"
      >
        <h3 className="text-2xl uppercase font-bold mb-2">{title}</h3>
        <div className="address">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-orange-600 mr-2"
          />
          <span className="text-gray-500">{address}</span>
        </div>
      </Link>
    </div>
  );
};

export default BigProject;
