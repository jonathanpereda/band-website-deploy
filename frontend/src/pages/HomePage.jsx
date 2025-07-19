import ShowsGallery from "../components/ShowsGallery.jsx";

function HomePage() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">NEWS</h2>
      <p>Upcoming shows:</p>
      <ShowsGallery />
    </div>
  );
}

export default HomePage;