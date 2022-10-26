import SingleService from "./SingleService/SingleService";
// Import (Data Arrays) from Importer helper.
import {
  serviceImages,
  serviceIcons,
  serviceTitles,
  serviceDescriptions,
} from "./Importer";

const Service = () => {
  // Start mapping, The main array is the (serviceImages), else will be mapped using (index).
  const allServices = serviceImages.map((service, index) => (
    <SingleService
      image={service}
      icon={serviceIcons[index]}
      title={serviceTitles[index]}
      description={serviceDescriptions[index]}
    />
  ));

  return (
    <div>
      <h2>
        we provide <span>the best</span>construction services
      </h2>
      <div className="services">{allServices}</div>
    </div>
  );
};

export default Service;
