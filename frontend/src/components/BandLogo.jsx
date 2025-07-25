import React, { useState, useEffect } from 'react';


function BandLogo(){
    const [isSpinning, setIsSpinning] = useState(true);
    const [useGrow, setUseGrow] = useState(false);
    const gifSrc = useGrow ? "/AnimatedLogo/logo-grow.gif" : "/AnimatedLogo/logo-spin.gif";
    const SPIN_DURATION = 2000; 
    const SPIN_INTERVAL = 4000; 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsSpinning(true);
            setTimeout(() => {
                setIsSpinning(false);
                setUseGrow((prev) => !prev);
            }, SPIN_DURATION);
        }, SPIN_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative inline-block mx-auto">
            <div className="absolute top-[14%] left-[5%] w-[86%] h-[80%] z-0 flex justify-between">
            <div
                className={`h-full w-1/2 bg-black/40 rounded-l-md blur-md origin-right transition-transform duration-[${SPIN_DURATION}ms] ease-in-out ${
                isSpinning ? (useGrow ? 'animate-shadowGrow' : 'animate-shadowLeftSpin') : ''
                }`}
            />
            <div
                className={`h-full w-1/2 bg-black/40 rounded-r-md blur-md origin-left transition-transform duration-[${SPIN_DURATION}ms] ease-in-out ${
                isSpinning ? (useGrow ? 'animate-shadowGrow' : 'animate-shadowRightSpin') : ''
                }`}
            />
            </div>
            <img
                src={isSpinning ? gifSrc : "/AnimatedLogo/logo-static.tiff"}
                alt="Band Logo"
                className="relative z-10 h-28 -ml-3"
            />
        </div>
    );

}
export default BandLogo;