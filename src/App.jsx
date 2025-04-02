import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";

import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Contact from "./Pages/Contact";
import { Admissions } from "./Pages/Admissions";
import About from "./Pages/About";
import Notice from "./Pages/Notice";
import Career from "./Pages/Career";
import Facilities from "./Pages/Facilities";
import PrivateRoutes from "./PrivateRoutes.jsx/PrivateRoutes";
import AdminApp from "./Admin/AdminApp";
import Test from "./Test";
// import { Test } from "./Test";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/privateROutes/pr" element={<PrivateRoutes />} />
          <Route path="/*" element={<AdminApp />} />{" "}
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
