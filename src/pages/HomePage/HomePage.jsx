import { getTrendingMoviesApi } from 'api/movies';
import Movies from 'components/Movies/Movies';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMoviesApi();

        setMovies(results);
        // setIsLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading ? <h2>Loading...</h2> : <Movies data={movies} />}
    </>
  );
};

export default HomePage;
