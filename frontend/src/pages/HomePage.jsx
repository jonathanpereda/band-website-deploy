import { useState, useEffect } from "react";
import ShowsGallery from "../components/ShowsGallery.jsx";
import HeaderSymbol from '../components/HeaderSymbol';

function HomePage() {

  const [headerAnimationDone, setHeaderAnimationDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeaderAnimationDone(true), 700); //LINK WITH ANIMATION TIME
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-bone">
      <h1 className="sr-only">Stolen Street Signs</h1>
      <section>
        <div 
          className="max-w-5xl mx-auto bg-chest/10 backdrop-blur-sm py-2 border-t border-b border-dark/40 pt-2 mb-2"
          style={{
            boxShadow: `inset 0 4px 12px rgba(0, 0, 0, 0.3),
                        inset 0 -4px 8px rgba(0, 0, 0, 0.15)`
          }}
        >
          <h2 className="text-4xl font-heading mt-2 mb-2 text-center text-sand">
            <HeaderSymbol finalSymbol="-" /> News <HeaderSymbol finalSymbol="-" />
          </h2>
        </div>
        <div className="p-6">
          <section>
            <h3 className="ml-4 mb-4 text-xl tracking-widest font-bodywide">Upcoming shows:</h3>
            <p className="text-sm font-display italic w-fit mx-auto text-center">Click below to view tickets</p>
            <ShowsGallery />
          </section>
          <section>
            <h3 className="ml-4 mt-12 text-xl tracking-widest font-bodywide">Announcements:</h3>
            <ul className="list-disc list-inside space-y-2 ml-10 mt-4 mb-8 text-base font-body leading-relaxed">
              <li>New song and music video coming soon.</li>
              <li>Big things in the works.</li>
            </ul>
          </section>
        </div>
      </section>
      <section>
        <div
          className="max-w-5xl mx-auto bg-chest/10 backdrop-blur-sm shadow-inner py-2 border-t border-b border-dark/40 pt-2 mb-2"
          style={{
            boxShadow: `inset 0 4px 12px rgba(0, 0, 0, 0.3),
                        inset 0 -4px 8px rgba(0, 0, 0, 0.15)`
          }}
        >
          <h2 className="text-4xl font-heading mt-2 mb-2 text-center text-sand">
            <HeaderSymbol finalSymbol="-" /> Our Music <HeaderSymbol finalSymbol="-" />
          </h2>
        </div>
        <div className="p-6">
          <div className="flex overflow-x-auto space-x-4 p-4 rounded-lg overflow-hidden">
            {/*Wait to load embed*/}
            {headerAnimationDone ? (
              <iframe
                className="shadow-xl shadow-dark/60"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/1I74OR8nxi8rT9KeJkPhRu?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="h-[352px] w-full bg-dark animate-pulse" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;