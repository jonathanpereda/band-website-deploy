import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Gallery() {

    const NUM_PHOTOS = 20; // CHANGE WHEN CHANGING PHOTOS
    const photos = Array.from({ length: NUM_PHOTOS }, (_, i) => `/GalleryPhotos/gallery${i + 1}.jpg`);

    const breakpointColumnsObj = {
        default: 3,     //DESKTOP Column #s
        1024: 2,        //MED SCREENS Column #s
        640: 1          //MOBILE Column #s
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });

        // Refresh AOS to make compatible with Masonry
        const handleLoad = () => AOS.refresh();
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);



    return(
        <div className="bg-[#1A2634] min-h-screen text-white p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">- Gallery -</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="flex flex-col gap-4"
            >
                {photos.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Band photo ${i + 1}`}
                    className="w-full rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                    data-aos="fade-up"
                    data-aos-delay={(i % 10) * 100} // Adds delay to images fading in
                    onLoad={() => AOS.refresh()} //Force AOS refresh
                />
                ))}
            </Masonry>
        </div>
    ); 
}
export default Gallery;