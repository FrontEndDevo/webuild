// Import images from Importer helper.
import {
  firstService,
  secondService,
  thirdService,
  fourthService,
  fifthService,
  sixthService,
} from "./Importer";

// Import icons from Importer helper.
import {
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import SingleService from "./SingleService/SingleService";

const Service = () => {
  // Arrange (images) in an array.
  const serviceImages = [
    firstService,
    secondService,
    thirdService,
    fourthService,
    fifthService,
    sixthService,
  ];
  // Arrange (icons) in an array.
  const serviceIcons = [
    faBuildingUser,
    faHouseChimney,
    faSitemap,
    faScrewdriverWrench,
    faPalette,
    faPaintBrush,
  ];

  // Prepare (titles) and store them in an array.
  const serviceTitles = [
    "Building Constructions",
    "House Renovation",
    "Architecture Design",
    "Interior Design",
    "Fixing & Support",
    "Painting",
  ];

  // Prepare (descriptions) and store them in an array.
  const serviceDescriptions = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "Numquam eius necessitatibus repudiandae nostrum odit iste sed expedita nisi iure,",
    "rem culpa dolore architecto totam, exercitationem natus vel",
    "eveniet autem quisquam laborum beatae quam inventore!",
    "Dolorem repellendus facere nobis debitis non. Officia error minima voluptas",
    "reiciendis asperiores consequuntur rem unde ipsum ad, libero officiis temporibus accusantium,",
  ];

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
