import { miniProjects, bigProjects } from "../../Helpers/WebsiteData";
import BigProject from "./BigProject/BigProject";
import MiniProject from "./MiniProject/MiniProject";

const Projects = () => {
  // Render all Mini Projects
  const allMini = miniProjects.map((mini) => (
    <MiniProject img={mini.img} title={mini.title} />
  ));

  // Render all Big Projects
  const allBig = bigProjects.map((big) => (
    <BigProject img={big.img} title={big.title} address={big.address} />
  ));

  return (
    <div className="bg-gray-100 px-12 py-24">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        Some of our
        <span className="text-orange-600"> popular </span>
        <br /> dream projects
      </h2>
      <div className="mini-projects flex mx-auto gap-6 bg-gray-200 w-fit py-4 px-24">
        {allMini}
      </div>
      <div className="big-projects grid grid-cols-3 gap-12">{allBig}</div>
    </div>
  );
};

export default Projects;
