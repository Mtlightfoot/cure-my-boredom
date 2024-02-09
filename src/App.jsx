// React Router imports
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Pages imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Activities from "./pages/Activities";
import Movies from "./pages/Movies";
import Geo from "./components/Geo";
import Footer from "./components/footer";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 07f06a3e5f972091bd4f41fd904ba4e064f640cc
