import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleService = (props) => {
  const { image, icon, title, description } = props;

  return (
    <div className="group single-service bg-white">
      <img src={image} alt={title} />
      <div className="info p-8 flex flex-col gap-4 text-center items-center relative">
        <div className="bg-white text-5xl text-orange-600 duration-200 group-hover:text-6xl rounded-t-full p-6 absolute -top-12">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h4 className="pt-8 uppercase text-2xl font-bold">{title}</h4>
        <p className="text-gray-600">
          rem culpa dolore architecto totam, exercitationem natus vel
        </p>
        <button className="relative uppercase text-orange-500 before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-orange-500 before:duration-500 before:ease-out before:hover:left-0 before:hover:w-full">
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SingleService;
