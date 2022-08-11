import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { ParseExcel } from "./components/ParseExcel";
import { Upload } from "./components/Upload";
import { JobListing } from "./components/JobListing";

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parse" element={<ParseExcel />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/jobs" element={<JobListing />} />
      </Routes>

      <div>
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;
