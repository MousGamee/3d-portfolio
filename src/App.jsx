import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Nabar";
import { Home } from "./pages";
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={"About"} />
          <Route path="/" element={"Project"} />
          <Route path="/" element={"Home"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
