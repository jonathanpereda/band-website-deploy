import { useEffect, useState, useRef } from "react";

const SYMBOLS = ['>', '<', '~', '-', '*', '+', '@', '#', '&', '%', '†', '§', '|', '=', '/', '\\'];

export default function HeaderSymbol({ finalSymbol, duration = 600, interval = 50 }) {
  const [display, setDisplay] = useState(finalSymbol);
  const frame = useRef();
  const start = useRef();

  useEffect(() => {
    let lastChange = 0;

    const animate = (timestamp) => {
      if (!start.current) start.current = timestamp;
      const elapsed = timestamp - start.current;

      if (elapsed - lastChange > interval) {
        setDisplay(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
        lastChange = elapsed;
      }

      if (elapsed < duration) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setDisplay(finalSymbol);
      }
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [finalSymbol, duration, interval]);

  return (
    <span className="inline-block w-[1ch] text-center">
      {display}
    </span>
);
}
