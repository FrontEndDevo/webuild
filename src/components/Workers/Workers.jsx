import { allWorkers, workersIcons } from "../../Helpers/WebsiteData";
import OneWorker from "./OneWorker/OneWorker";

const Workers = () => {
  // Pass social-media icons & each worker information to OneWorker component:
  const ourWorkers = allWorkers.map((worker) => (
    <OneWorker socialMedia={workersIcons} eachWorker={worker} />
  ));
  return (
    <div className="bg-gray-500 py-12 my-12">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        We are
        <span className="text-orange-500">
          {" "}
          professional &<br /> expert{" "}
        </span>
        workers
      </h2>
      <div className="workers flex gap-12 justify-center items-center">
        {ourWorkers}
      </div>
    </div>
  );
};

export default Workers;
