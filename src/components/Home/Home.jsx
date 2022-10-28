import { Fragment } from "react";
import About from "../About/About";
import Service from "../Service/Service";
import CallBack from "../CallBack/CallBack";
import Workers from "../Workers/Workers";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Service />
      <CallBack />
      <Workers />
    </Fragment>
  );
};

export default Home;
