'use client'
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Input from '@/components/Input';
import MovieRow from '@/components/MovieRow';
import findMovie from '@/service/gemini';
import React from 'react';


const Home: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  const onFind = async () => {
    setLoading(true);
    try {
      const data = await findMovie(query);
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className='flex gap-2 mt-9 justify-center items-center'>
        <Input value={query} type='text' placeholder='Escreva' onChange={(e) => setQuery(e.target.value)} />
        <Button disabled={loading} text='Buscar' onClick={onFind} />
      </div>
      <div className="container mx-auto px-4">
          <MovieRow isLoading={loading} title="Encontrados" movies={movies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
