import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OneWorker = (props) => {
  // Split social icons here:
  const socialMedia = props.socialMedia.map((social) => (
    <FontAwesomeIcon icon={social} />
  ));

  return (
    <div className="worker bg-white">
      <div className="person flex">
        <img
          src={props.eachWorker.img}
          alt={props.eachWorker.name}
          className="w-5/6"
        />
        <div className="social flex flex-col justify-between p-4 text-gray-500 w-1/6">
          {socialMedia}
        </div>
      </div>
      <div className="details p-4">
        <h3 className="uppercase font-bold text-2xl">
          {props.eachWorker.name}
        </h3>
        <p className="text-gray-500">{props.eachWorker.job}</p>
      </div>
    </div>
  );
};

export default OneWorker;
