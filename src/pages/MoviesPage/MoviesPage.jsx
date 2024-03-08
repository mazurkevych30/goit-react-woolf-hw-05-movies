import { getSearchMoviesApi } from 'api/movies';
import Movies from 'components/Movies/Movies';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const query = searchParams.get('search');
        const { results } = await getSearchMoviesApi(query);
        setSearchMovies(results);
      } catch (error) {}
    };

    getMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchForm />
      {searchParams.size ? (
        !searchMovies.length ? (
          <p>Not found!</p>
        ) : (
          <Movies data={searchMovies} />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default MoviesPage;
