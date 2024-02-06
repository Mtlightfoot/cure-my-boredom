import Navbar from './components/Navbar';
// import NewsItem from './components/NewsItem';
import './styles/style.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CureMe from './components/CureMe'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// React Router imports
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Pages imports
import SearchBar from './components/SearchBar';
import FetchData from './data/FetchData';
import Home from './pages/Home';
import Activities from './pages/Activities';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
