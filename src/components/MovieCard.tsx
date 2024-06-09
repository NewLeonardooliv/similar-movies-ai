import React from 'react';

interface MovieCardProps {
    title: string;
    image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
    return (
        <div className="w-48 m-2 overflow-hidden">
            <div className="relative group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-110 duration-300"
                />
                <h3 className="text-white mt-2 text-sm">{title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
