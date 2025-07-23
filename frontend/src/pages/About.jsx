function About(){

    const bandMembers = [
    {
        name: "Alysa Arias",
        photo: "/GalleryPhotos/gallery18.jpg",
        description: "Hi I'm the singer and I sing the songs.",
    },
    {
        name: "Donnie Hunter",
        photo: "/GalleryPhotos/gallery17.jpg",
        description: "Hello I am the drummer and I play the drums.",
    },
    {
        name: "Jonathan Pereda",
        photo: "/GalleryPhotos/gallery10.jpg",
        description: "Hello I am one of the guitarist and I play the guitar.",
    },
    {
        name: "Paul Gatdula",
        photo: "/GalleryPhotos/gallery14.jpg",
        description: "Hello I am one of the guitarist and I play the guitar.",
    },
    {
        name: "Sam Thompson",
        photo: "/GalleryPhotos/gallery15.jpg",
        description: "Hello I am the bassist and I play the bass.",
    },];  

    return (
    <div className="bg-[#1A2634] min-h-screen text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">- About -</h1>
        <p className="flex justify-center mb-6 underline">Hello! We are Stolen Street Signs from the city of Las Vegas.</p>

        {bandMembers.map((member, index) => (
            <div
            key={member.name}
            className={`flex flex-wrap items-center justify-between mb-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""} `}
            >
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-[500px] aspect-[4/5] overflow-hidden">
                        <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div
                    className={`flex-1 flex flex-col mt-4 ${
                        index % 2 === 1 
                            ? "pr-8 items-end text-right space-y-2" 
                            : "pl-8 space-y-2"
                    }`}
                >
                    <p className="font-bold">{member.name}</p>
                    <p>{member.description}</p>
                </div>
            </div>
        ))}
    </div>
  );
}
export default About;