// React Router imports
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Pages imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Activities" element={<Activities />} />
        </Routes>
      </div>
    </Router>
    )
}

export default App
