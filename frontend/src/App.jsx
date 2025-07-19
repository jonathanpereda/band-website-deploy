import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';


function App() {
  return (
    <div>
      <Router>
        <div className="bg-[#1A2634] min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
