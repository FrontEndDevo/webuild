import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clientsData } from "../../Helpers/WebsiteData";

const Clients = () => {
  return (
    <div className="clients bg-gray-100 py-24 px-12">
      <h3 className="uppercase text-5xl font-bold text-center">
        What our{" "}
        <span className="text-orange-600">
          {" "}
          happy <br /> clients{" "}
        </span>
        say!!!
      </h3>
      <div className="content mt-12 flex gap-12 items-center">
        <img src={clientsData.clientOne} alt="Builder" />
        <div className="client  p-8 flex gap-6 items-center">
          <img className="" src={clientsData.clientTwo} alt="Client" />
          <div className="client-info">
            <h3 className="uppercase font-bold text-2xl">Client name</h3>
            <p className="text-gray-400">profession</p>
            <span className="text-gray-400 text-lg">
              <FontAwesomeIcon
                className="text-orange-600 text-6xl mr-2"
                icon={clientsData.faQuoteLeft}
              />{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quos possimus temporibus maiores est pariatur dolores. Nesciunt ex
              necessitatibus ut!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
