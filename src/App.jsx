import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import CallBack from "./components/CallBack/CallBack";
import Navbar from "./components/NavigationBar/Navbar";
import Service from "./components/Service/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <CallBack />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
