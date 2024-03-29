import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Nabar";
import { About, Contact, Home, Project } from "./pages";
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
