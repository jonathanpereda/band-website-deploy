import ShowsGallery from "../components/ShowsGallery.jsx";

function HomePage() {
  return (
    <div className="p-6 text-white">
      <section>
        <h2 className="text-2xl font-bold mb-4">-NEWS-</h2>
        <section>
          <h3 className="ml-4 mb-4 font-semibold">Upcoming shows:</h3>
          <p className="text-sm italic w-fit mx-auto text-center">Click below to view tickets</p>
          <ShowsGallery />
        </section>
        <section>
          <h3 className="ml-4 mt-12 font-semibold">Announcements:</h3>
          <ul className="list-disc list-inside space-y-2 ml-10 mt-4 text-base text-gray-300 leading-relaxed">
            <li>New song and music video coming soon.</li>
            <li>Big things in the works.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-12">-OUR MUSIC-</h2>
        <div className="flex overflow-x-auto space-x-4 p-4 rounded-lg overflow-hidden mt-4">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/1I74OR8nxi8rT9KeJkPhRu?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;