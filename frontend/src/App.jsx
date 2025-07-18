import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="bg-[#1A2634] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
