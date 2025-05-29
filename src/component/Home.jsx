import React from 'react'

const cards = [
    {
        id: 1,
        title: 'Reels view',
        subtitle: 'Peaceful scenery in the Alps',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/043/555/242/small/realistic-3d-cinema-film-strip-in-perspective-isolated-on-blue-background-template-cinema-festival-movie-design-cinema-film-strip-for-ad-poster-presentation-show-brochure-banner-or-flyer-vector.jpg',
        rating: 4,
    },
    {
        id: 2,
        title: 'City Lights',
        subtitle: 'Night skyline of a modern city',
        image: 'https://wallpapers.com/images/hd/movie-poster-background-tvke0r6ko2jpix0j.jpg',
        rating: 5,
    },
    {
        id: 3,
        title: 'Theater',
        subtitle: 'Relax by the turquoise waters',
        image: 'https://t3.ftcdn.net/jpg/05/62/25/26/360_F_562252610_Watb1rsYXzmDnCDqxA2CFEsS72o8D05E.jpg',
        rating: 3,
    },
];
const Home = () => {

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header Image with Text Input */}
            <div className=" flex relative w-full h-140 mb-8">
                <img
                    src="https://images.pexels.com/photos/7234413/pexels-photo-7234413.jpeg"
                    alt="Header"
                    className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-start  rounded-xl">
                    <div className="w-2/3 md:w-2/3 p-5 rounded-md text-white mb-28 text-justify">
                        <h1 className=' text-3xl  md:text-5xl text-[#d80af3f8]  font-bold mb-10'>Hello friends! 👋</h1>
                        <p className=' md:text-2xl mt-0  text-[#ee0699]'>Here is my exploration design of LebahTampan - Movie Dashboard that allows users watch movies streaming, discover and download movies.What do you think guys? Hope you guys enjoy it. Feel free to leave your feedback in the comment section. Thank you!</p>

                    </div>


                </div>
            </div>

            {/* Simple Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white rounded-xl shadow p-4">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                        <p className="text-gray-600 mb-2">{card.subtitle}</p>
                        <div className="flex text-yellow-400 text-lg">
                            {"★".repeat(card.rating)}
                            {"☆".repeat(5 - card.rating)}
                        </div>
                    </div>
                ))}
            </div>
            



        </div>
    );
};


export default Home