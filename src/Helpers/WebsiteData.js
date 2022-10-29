// Importing all app images here ->
// Service component images:
import firstService from "../assets/images/firstService.jpg";
import secondService from "../assets/images/secondService.jpg";
import thirdService from "../assets/images/thirdService.jpg";
import fourthService from "../assets/images/fourthService.jpg";
import fifthService from "../assets/images/fifthService.jpg";
import sixthService from "../assets/images/sixthService.jpg";

// Workers component images:
import WorkerOne from "../assets/images/workerone.jpg";
import WorkerTwo from "../assets/images/workertwo.jpg";

// Importing all app icons here ->
// Service component images:
import {
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

// Workers component images:
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

///////////////////////////////////////////////////////////////////////

// Arrange (images) in an array. // (((Service component)))
const serviceImages = [
  firstService,
  secondService,
  thirdService,
  fourthService,
  fifthService,
  sixthService,
];

// Arrange (icons) in an array. // (((Service component)))
const serviceIcons = [
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
];

// Prepare (titles) and store them in an array. // (((Service component)))
const serviceTitles = [
  "Building Constructions",
  "House Renovation",
  "Architecture Design",
  "Interior Design",
  "Fixing & Support",
  "Painting",
];

// Prepare (descriptions) and store them in an array. // (((Service component)))
const serviceDescriptions = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Numquam eius necessitatibus repudiandae nostrum odit iste sed expedita nisi iure,",
  "rem culpa dolore architecto totam, exercitationem natus vel",
  "eveniet autem quisquam laborum beatae quam inventore!",
  "Dolorem repellendus facere nobis debitis non. Officia error minima voluptas",
  "reiciendis asperiores consequuntur rem unde ipsum ad, libero officiis temporibus accusantium,",
];

export { serviceImages, serviceIcons, serviceTitles, serviceDescriptions }; // (((Service component)))

///////////////////////////////////////////////////////////////////////

// Arrange (icons) in an array. // (((Workers component)))
const workersIcons = [
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
];

// Workers data / information:
const allWorkers = [
  { name: "Adam Philips", job: "CEO & Founder", img: WorkerOne },
  { name: "Dylan Adams", job: "Civil Engineer", img: WorkerTwo },
  { name: "Jhon Doe", job: "Interior Designer", img: WorkerOne },
  { name: "Josh Dunn", job: "Painter", img: WorkerTwo },
]; // (((Workers component)))

export { workersIcons, allWorkers }; // (((Workers component)))