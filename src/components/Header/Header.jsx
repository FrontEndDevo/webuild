import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerData, headerArrowIcons } from "../../Helpers/WebsiteData";
import { useEffect } from "react";
const Header = () => {
  const [slide, setSlide] = useState(0);

  const leftArrowHandler = () => {
    if (slide - 1 >= 0) setSlide((prevState) => --prevState);
  };

  const rightArrowHandler = () => {
    if (slide + 1 < headerData.length) setSlide((prevState) => ++prevState);
  };

  // To change the content from time to time.
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      if (slide - 1 >= 0) setSlide((prevState) => --prevState);
      if (slide + 1 < headerData.length) setSlide((prevState) => ++prevState);
    }, 5000);

    return () => {
      clearTimeout(slideTimer);
    };
  }, [slide]);

  return (
    <div className="header">
      <div className="overlay relative">
        <img
          src={headerData[slide].img}
          alt={headerData[slide].title_one + headerData[slide].title_two}
          className="w-full h-screen"
        />
        <span className="absolute w-full h-full bg-gray-900 opacity-80 top-0 left-0 z-10"></span>
      </div>

      <div className="content absolute top-1/3 left-1/3 z-20 flex flex-col items-center gap-8">
        <FontAwesomeIcon
          icon={headerData[slide].icon}
          className=" text-7xl text-orange-600 z-20"
        />
        <h2 className="uppercase font-bold text-7xl text-white z-20 text-center leading-tight">
          {headerData[slide].title_one} <br /> {headerData[slide].title_two}
        </h2>
        <button className="uppercase text-white bg-orange-600 py-4 px-14 duration-500 hover:text-black relative before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-2 before:bg-black before:duration-500 before:ease-out before:hover:left-1/4 before:hover:w-1/2">
          {headerData[slide].button}
        </button>
      </div>

      <div className="buttons text-4xl">
        <button
          onClick={leftArrowHandler}
          className="p-8 text-gray-600 duration-300 hover:text-white absolute top-1/2 left-0 z-20 mx-24"
        >
          <FontAwesomeIcon icon={headerArrowIcons[0]} />
        </button>
        <button
          onClick={rightArrowHandler}
          className="p-8 text-gray-600 duration-300 hover:text-white absolute top-1/2 right-0 z-20 mx-24"
        >
          <FontAwesomeIcon icon={headerArrowIcons[1]} />
        </button>
      </div>
    </div>
  );
};

export default Header;
