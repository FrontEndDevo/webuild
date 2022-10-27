import { Fragment } from "react";
import About from "../About/About";
import Service from "../Service/Service";
import CallBack from "../CallBack/CallBack";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Service />
      <CallBack />
    </Fragment>
  );
};

export default Home;
