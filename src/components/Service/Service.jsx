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
    <div className="Service bg-gray-200 p-10">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold">
        we provide <span className="text-orange-500">the best </span><br />construction services
      </h2>
      <div className="services grid grid-cols-3 gap-10">{allServices}</div>
    </div>
  );
};

export default Service;
