import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';


function App() {
  return (
      <Router>
        <ScrollToTop />
        <div className="bg-[#1A2634] min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>  
          <Footer />
        </div>
      </Router>
  );
}

export default App;
