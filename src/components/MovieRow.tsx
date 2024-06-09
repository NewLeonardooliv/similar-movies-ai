import React from 'react';
import MovieCard from './MovieCard';
import SkeletonMovieCard from './SkeletonMovieCard';

interface MovieRowProps {
    title: string;
    movies: { title: string; poster: string; }[];
    isLoading: boolean
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, isLoading }) => {
    return (
        <div className="my-8">
            <h2 className="text-white text-2xl mb-4">{title}</h2>
            {isLoading ? (
                <div className='flex'>
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                    <SkeletonMovieCard />
                </div>
            ) : (
                <div>
                    {movies.length > 0 ? (
                        <div className="flex">
                            {movies.map((movie, index) => (
                                <MovieCard key={index} title={movie.title} image={movie.poster} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-700 p-6 rounded-md text-center">
                            <p className="text-white text-lg">
                                Por favor, realize uma pesquisa para encontrar filmes e séries.
                            </p>
                        </div>
                    )}
                </div>)}
        </div>
    );
};

export default MovieRow;
