import { Link } from "react-router-dom";
import { miniProjects } from "../../Helpers/WebsiteData";
import MiniProject from "./MiniProject/MiniProject";

const Projects = () => {
  // Render all Mini Projects
  const allMini = miniProjects.map((mini) => (
    <MiniProject img={mini.img} title={mini.title} />
  ));

  return (
    <div className="bg-gray-100">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        Some of our
        <span className="text-orange-600"> popular </span>
        <br /> dream projects
      </h2>
      <div className="mini-projects">{allMini}</div>
      <div className="big-projects">
        <div className="project">
          <img src="" alt="" />
          <Link to="/" className="details">
            <h3>Project name</h3>
            <div className="address">
              <i></i>
              <span>123 Street, New York, USA</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
