import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/NavigationBar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
