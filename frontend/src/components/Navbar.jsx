import { Link } from 'react-router-dom';
import BandLogo from './BandLogo';

function Navbar() {
  return (
    <>
      <div className="bg-frontground/80 backdrop-blur-md py-4 flex justify-center">
        <BandLogo />
      </div>
      <nav className="sticky top-0 z-50 bg-frontground/80 backdrop-blur-md text-bone font-display shadow-md">
        <div className="flex justify-center gap-6 py-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/contactus" className="hover:underline">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
