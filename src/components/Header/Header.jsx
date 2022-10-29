import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerData } from "../../Helpers/WebsiteData";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();

const Header = () => {
  const headerSections = headerData.map((headerObj) => (
    <>
      <div className="overlay relative">
        <img
          src={headerObj.img}
          alt={headerObj.title_one + headerObj.title_two}
        />
        <span className="absolute w-full h-full bg-gray-900 opacity-80 top-0 left-0 z-10"></span>
      </div>
      <div className="content absolute top-1/2 left-1/3 z-20 flex flex-col items-center gap-8">
        <FontAwesomeIcon
          icon={headerObj.icon}
          className=" text-6xl text-orange-600 z-20"
        />
        <h2 className="uppercase font-bold text-7xl text-white z-20 text-center leading-tight">
          {headerObj.title_one} <br /> {headerObj.title_two}
        </h2>
        <button className="uppercase text-white bg-orange-600 py-4 px-14 duration-500 hover:text-black relative before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-2 before:bg-black before:duration-500 before:ease-out before:hover:left-1/4 before:hover:w-1/2">
          {headerObj.button}
        </button>
      </div>
    </>
  ));

  return (
    <div className="header">
      {/* {headerSections} */}
      <div class="reveal">
        <div class="slides">
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    </div>
  );
};

export default Header;
