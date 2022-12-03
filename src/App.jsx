import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/NavigationBar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/webuild" element={<Navigate to="/webuild/home" />} />
        <Route path="/webuild/home" element={<Home />} />
        <Route path="/webuild/about" element={<Navigate to="/webuild/home" />} />
        <Route path="/webuild/service" element={<Navigate to="/webuild/home" />} />
        <Route path="/webuild/contact" element={<Navigate to="/webuild/home" />} />
      </Routes>
    </div>
  );
};

export default App;
