import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Clients = () => {
  return (
    <div className="clients text-center bg-gray-200 py-24">
      <h3 className="uppercase text-5xl font-bold">
        What our{" "}
        <span className="text-orange-600 ">
          {" "}
          happy <br /> clients{" "}
        </span>
        say!!!
      </h3>
      <div className="content">
        <img src="" alt="" />
        <div className="client">
          <img src="" alt="" />
          <div className="client-info">
            <h3>Client name</h3>
            <p>profession</p>
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} /> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus, ipsam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
