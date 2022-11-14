import { Fragment } from "react";
import About from "../About/About";
import Service from "../Service/Service";
import CallBack from "../CallBack/CallBack";
import Workers from "../Workers/Workers";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Clients from "../Clients/Clients";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Service />
      <CallBack />
      <Projects />
      <Workers />
      <Clients />
      <Articles />
      <Footer />
    </Fragment>
  );
};

export default Home;
