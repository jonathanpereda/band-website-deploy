import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ShowsGallery() {

    //Flyer Array
    const flyers = [
        {
        src: "swandive-7-12.jpeg",
        alt: "Swan Dive Flyer",
        cap: "Las Vegas, NV - 7-12-25",
        url: "https://swandivelv.com",
        },
        {
        src: "transplants-6-12.png",
        alt: "Transplants Flyer",
        cap: "Lancaster, CA - 6-12-25",
        url: "https://transplantsbrewing.com",
        },
        {
        src: "swandive-7-12.jpeg",
        alt: "Swan Dive Flyer",
        cap: "Las Vegas, NV - 7-12-25",
        url: "https://swandivelv.com",
        },
        {
        src: "transplants-6-12.png",
        alt: "Transplants Flyer",
        cap: "Lancaster, CA - 6-12-25",
        url: "https://transplantsbrewing.com",
        },
        {
        src: "swandive-7-12.jpeg",
        alt: "Swan Dive Flyer",
        cap: "Las Vegas, NV - 7-12-25",
        url: "https://swandivelv.com",
        },
        {
        src: "transplants-6-12.png",
        alt: "Transplants Flyer",
        cap: "Lancaster, CA - 6-12-25",
        url: "https://transplantsbrewing.com",
        },
    ];


    //Handle scrolling
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const flyer = container.querySelector('img'); //Flyers must be same width
        if (!flyer) return;

        const flyerWidth = flyer.offsetWidth + 16; //Account for space between flyers
        const scrollLeft = container.scrollLeft;

        let newScrollLeft;
        if (direction === 'left') {
            newScrollLeft = scrollLeft - flyerWidth;
        } else {
            newScrollLeft = scrollLeft + flyerWidth;
        }

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
        });
    };

    //Hide Arrows on scroll edge
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;

            setShowLeft(scrollLeft > 8); //Buffer for left side
            setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
        };

        container.addEventListener('scroll', handleScroll);

        // Inital call to get starting state
        handleScroll();

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);


    return(

        <div className="w-full relative px-2 sm:px-6">
            {/*Left scroll arrow*/}
            {showLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                >
                    <ChevronLeft />
                </button>
            )}
            {/*Right scroll arrow*/}
            {showRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                >
                    <ChevronRight />
                </button>
            )}
            <div
                ref={scrollRef} 
                className="flex overflow-x-auto space-x-4 p-4 bg-black scrollbar-hide snap-x snap-mandatory scroll-pl-2"
            >
                {/*Pull flyers from array*/}
                 {flyers.map((flyer, index) => (
                    <a
                    key={index}
                    href={flyer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 snap-start"
                    >
                        <div className="relative group">
                            <img
                                src={flyer.src}
                                alt={flyer.alt}
                                className="h-64 sm:h-64 flex-shrink-0 rounded transition-transform duration-200 hover:scale-105"
                            />
                            {/*Captions*/}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded">
                                <span className="text-white text-center px-2 text-sm sm:text-base font-semibold">
                                {flyer.cap}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default ShowsGallery;