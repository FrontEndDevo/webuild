import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnArticle = (props) => {
  return (
    <div className="signle-article bg-gray-100">
      <img src={props.img} alt={props.title} />
      <div className="author p-6 flex justify-between">
        <div className="info flex items-center gap-2">
          <img
            src={props.author.photo}
            alt={props.author.name}
            className="rounded-full w-12"
          />
          <p className="text-gray-400">{props.author.name}</p>
        </div>
        <div className="published-date text-gray-400 flex gap-2 items-center">
          <FontAwesomeIcon icon={props.icons[0]} className="text-orange-600" />
          <p>{props.author.date}</p>
        </div>
      </div>
      <h2 className="px-6 font-bold text-2xl">{props.title}</h2>
      <button className="px-6 py-4 relative uppercase text-orange-500 hover:text-orange-700">
        Read More <FontAwesomeIcon icon={props.icons[1]} />
      </button>
    </div>
  );
};

export default AnArticle;
