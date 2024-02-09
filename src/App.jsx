// React Router imports
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Pages imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Activities from "./pages/Activities";
import Movies from "./pages/Movies";
import Geo from "./components/Geo";
import Footer from "./components/Footer";
import { BookmarkAddSharp } from "@mui/icons-material";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
