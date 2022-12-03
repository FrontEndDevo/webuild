import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/NavigationBar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Navigate to="/home" />} />
        <Route path="/service" element={<Navigate to="/home" />} />
        <Route path="/contact" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
