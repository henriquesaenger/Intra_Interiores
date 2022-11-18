import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
