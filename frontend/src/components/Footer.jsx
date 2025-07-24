import {FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaApple, FaItunes } from "react-icons/fa";

function Footer() {
    return(
        <footer className="bg-black text-white py-4 flex justify-center gap-6">
            <a href="https://www.instagram.com/stolenstreetsigns?igsh=MXdtcXJiOTk1aDYxag==" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="hover:text-pink-500 transition duration-200" />
            </a>
            <a href="https://www.tiktok.com/@stolen_street_signs?_t=ZP-8yAIfhTaCtC&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={28} className="hover:text-gray-400 transition duration-200" />
            </a>
            <a href="https://www.youtube.com/@StolenStreetSigns" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={28} className="hover:text-red-600 transition duration-200" />
            </a>
            <a href="https://open.spotify.com/artist/1I74OR8nxi8rT9KeJkPhRu?si=rEqvqMq1Spq7P0ZnzCyfCg" target="_blank" rel="noopener noreferrer">
                <FaSpotify size={28} className="hover:text-green-500 transition duration-200" />
            </a>
            <a href="https://music.apple.com/us/artist/stolen-street-signs/1737913868" target="_blank" rel="noopener noreferrer">
                <FaItunes size={28} className="hover:text-pink-400 transition duration-200" />
            </a>
        </footer>
    );
}
export default Footer;