import { Link } from 'react-router-dom';
import BandLogo from './BandLogo';

//<h1 className="text-xl font-bold">Stolen Street Signs</h1>

function Navbar() {
  return (
    <nav className="bg-[#1A2634] text-white py-6 flex flex-col items-center">
        <BandLogo />
        <div className="mt-4 flex space-x-6">
            <div className="mt-1 space-x-4 flex items-center">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/gallery" className="hover:underline">Gallery</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;