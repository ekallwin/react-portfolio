import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Home from "./Home"
import Projects from "./Components/project"
import Achievements from "./Components/achievements"
function App() {

  return (
    <BrowserRouter>
      <NotificationContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
