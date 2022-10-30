import { Fragment } from "react";
import About from "../About/About";
import Service from "../Service/Service";
import CallBack from "../CallBack/CallBack";
import Workers from "../Workers/Workers";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Service />
      <CallBack />
      <Workers />
      <Articles />
    </Fragment>
  );
};

export default Home;
