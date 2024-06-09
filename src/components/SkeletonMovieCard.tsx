import React from 'react';

const SkeletonMovieCard: React.FC = () => {
    return (
        <div className="w-48 m-2 overflow-hidden animate-pulse">
            <div className="relative group">
                <div className="w-full h-64 bg-gray-700 rounded-lg"></div>
                <div className="mt-2 h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
        </div>
    );
};

export default SkeletonMovieCard;
