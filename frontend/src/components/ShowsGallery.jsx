import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ShowsGallery() {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const amount = 300;
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };


    return(

        <div className="w-full relative px-2 sm:px-6">
            {/*Left scroll arrow*/}
            <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            >
                <ChevronLeft />
            </button>
            {/*Right scroll arrow*/}
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            >
                <ChevronRight />
            </button>

            <div
                ref={scrollRef} 
                className="flex overflow-x-auto space-x-4 p-4 bg-black hide-scrollbar"
            >
                <img
                    src="swandive-7-12.jpeg"
                    alt="Flyer1"
                    className="h-64 sm:h-64 flex-shrink-0 rounded"
                />
                <img
                    src="transplants-6-12.png"
                    alt="Flyer2"
                    className="h-64 sm:h-64 flex-shrink-0 rounded"
                />
                <img
                    src="swandive-7-12.jpeg"
                    alt="Flyer3"
                    className="h-64 sm:h-64 flex-shrink-0 rounded"
                />
            </div>
        </div>
    );
}
export default ShowsGallery;