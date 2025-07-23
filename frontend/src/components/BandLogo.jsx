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

    return(
        <img src={isSpinning ? gifSrc : "/AnimatedLogo/logo-static.tiff"}
        alt="Band Logo"
        className="h-28 -ml-3" />
    );

}
export default BandLogo;