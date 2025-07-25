import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Gallery() {

    const NUM_PHOTOS = 21; // CHANGE WHEN CHANGING PHOTOS
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
        <div className="bg-dark min-h-screen text-white">
            <div 
                className="max-w-5xl mx-auto bg-chest/10 backdrop-blur-sm py-2 border-t border-b border-dark/40 pt-2 mb-2"
                style={{
                    boxShadow: `inset 0 4px 12px rgba(0, 0, 0, 0.3),
                                inset 0 -4px 8px rgba(0, 0, 0, 0.15)`
                }}
            >
                <h1 className="text-4xl font-heading mt-2 mb-2 text-center text-sand">~ Gallery ~</h1>
            </div>
            <div className="p-6">
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
        </div>
    ); 
}
export default Gallery;