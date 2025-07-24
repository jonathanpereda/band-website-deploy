import { Link } from 'react-router-dom';
import BandLogo from './BandLogo';

function Navbar() {
  return (
    <>
      <div className="bg-[#1f2a38]/80 backdrop-blur-md py-6 flex justify-center">
        <BandLogo />
      </div>
      <nav className="sticky top-0 z-50 bg-[#1f2a38]/80 backdrop-blur-md text-white shadow-md">
        <div className="flex justify-center gap-6 py-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
