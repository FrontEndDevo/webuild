import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OneWorker = (props) => {
  // Split social icons here:
  const socialMedia = props.socialMedia.map((social) => (
    <button className="p-2 outline-orange-600 relative before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-orange-600 before:duration-500 before:ease-out before:hover:left-0 before:hover:w-full">
      <FontAwesomeIcon icon={social} />
    </button>
  ));

  return (
    <div className="worker bg-gray-200">
      <div className="person flex">
        <img
          src={props.eachWorker.img}
          alt={props.eachWorker.name}
          className="w-5/6"
        />
        <div className="social flex flex-col justify-between items-center p-4 text-gray-500 w-1/6">
          {socialMedia}
        </div>
      </div>
      <div className="details p-4">
        <h3 className="uppercase font-bold text-2xl">
          {props.eachWorker.name}
        </h3>
        <p className="text-gray-500 mt-2">{props.eachWorker.job}</p>
      </div>
    </div>
  );
};

export default OneWorker;
