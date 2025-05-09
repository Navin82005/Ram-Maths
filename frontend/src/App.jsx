import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./page/Landing/Landing";
import { Fragment } from "react";
import FooterSection from "./page/section/Footer";
import NavBar from "./page/section/Navbar";
import Guides from "./page/Guides/Guides";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
