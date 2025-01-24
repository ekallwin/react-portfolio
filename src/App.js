import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home"
import Projects from "./Components/project"
import Achievements from "./Components/achievements"
function App() {

  return (
    <BrowserRouter>
      <ToastContainer className="toast-container" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
