// Importing (Images) & Arrange them:
import firstService from "../assets/images/firstService.jpg";
import secondService from "../assets/images/secondService.jpg";
import thirdService from "../assets/images/thirdService.jpg";
import fourthService from "../assets/images/fourthService.jpg";
import fifthService from "../assets/images/fifthService.jpg";
import sixthService from "../assets/images/sixthService.jpg";

// Import (icons) from FontAwesome & arrange them in an array:
import {
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

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

export { serviceImages, serviceIcons };

// Create (Titles) and (Descriptions) arrays & export them:

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

export { serviceTitles, serviceDescriptions };
