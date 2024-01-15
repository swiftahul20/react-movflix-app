import React from 'react'

const MovieCard = ({ title, imageUrl, releaseDate }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-400">{releaseDate}</p>
        </div>
    );
};

export default MovieCard