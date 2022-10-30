import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnArticle = (props) => {
  return (
    <div className="signle-article bg-gray-400">
      <img src={props.img} alt={props.title} />
      <div className="author">
        <div className="info">
          <img src={props.author.photo} alt={props.author.name} />
          <p>{props.author.name}</p>
        </div>
        <div className="published-date">
          <FontAwesomeIcon icon={props.icons[0]} />
          <p>{props.author.date}</p>
        </div>
      </div>
      <h2>{props.title}</h2>
      <button className="relative uppercase text-orange-500 before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-orange-500 before:duration-500 before:ease-out before:hover:left-0 before:hover:w-full">
        Read More <FontAwesomeIcon icon={props.icons[1]} />
      </button>
    </div>
  );
};

export default AnArticle;
