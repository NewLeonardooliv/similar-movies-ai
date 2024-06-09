'use server'
import axios from 'axios';

export const getMoviePoster = async (movieName: string) => {
  try {
    if (!process.env.MOVIE_DB) {
      console.log('sem api key')
      return [];
    }

    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.MOVIE_DB,
        query: movieName
      }
    });

    if (response.data.results.length > 0) {
      return response.data.results[0].poster_path ?? '';
    } else {
      return '';
    }
  } catch (error) {
    console.error('Error fetching movie poster:', error);
    throw error;
  }
};
