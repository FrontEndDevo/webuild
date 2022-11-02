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

// Header component images:
import header from "../assets/images/header.jpg";

// Articles component images:
import articleOne from "../assets/images/articleone.jpg";
import articleTwo from "../assets/images/articletwo.jpg";
import articleThree from "../assets/images/articlethree.jpg";
import authorOne from "../assets/images/user.jpg";

// Importing all app icons here ->
import {
  faBuildingUser,
  faHouseChimney,
  faSitemap,
  faScrewdriverWrench,
  faPalette,
  faPaintBrush,
  faChevronRight,
  faChevronLeft,
  faArrowRight,
  faCalendarDays,
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

///////////////////////////////////////////////////////////////////////

const headerData = [
  {
    img: sixthService,
    icon: faHouseChimney,
    title_one: "Build your dream ",
    title_two: "house with us",
    button: "Get a quote",
  },
  {
    img: header,
    icon: faScrewdriverWrench,
    title_one: "We are trusted for ",
    title_two: "your project",
    button: "Contact us",
  },
]; // (((Header component)))

const headerArrowIcons = [faChevronLeft, faChevronRight]; // (((Header component)))

export { headerData, headerArrowIcons }; // (((Header component)))

///////////////////////////////////////////////////////////////////////

const mainArticles = [
  {
    img: articleOne,
    author: {
      photo: authorOne,
      name: "Jhon Doe",
      date: "01 Jan, 2022",
    },
    title: "REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT",
  },
  {
    img: articleTwo,
    author: {
      photo: authorOne,
      name: "Jhon Doe",
      date: "01 Jan, 2022",
    },
    title: "REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT",
  },
  {
    img: articleThree,
    author: {
      photo: authorOne,
      name: "Jhon Doe",
      date: "01 Jan, 2022",
    },
    title: "REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT",
  },
]; // (((Articles component)))

const articlesIcons = [faCalendarDays, faArrowRight]; // (((Articles component)))

export { mainArticles, articlesIcons }; // (((Articles component)))
