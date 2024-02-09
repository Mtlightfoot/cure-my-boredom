// React Router imports
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Pages imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Activities from './pages/Activities';
import Movies from './pages/Movies'

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
      </div>
    </Router>
  )
  
}

export default App