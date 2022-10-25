import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolcano } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <h1 className="bg-red-500">Hello world</h1>
      <FontAwesomeIcon icon={faVolcano} className="text-orange-600" />
      <FontAwesomeIcon icon={faBuilding} />
    </div>
  );
}

export default App;
