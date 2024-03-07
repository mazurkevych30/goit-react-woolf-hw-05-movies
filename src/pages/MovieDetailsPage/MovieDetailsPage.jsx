import { getMovieDeteilsApi } from 'api/movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDeteils = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDeteilsApi(movieId);
        setMovie(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDeteils();
  }, [movieId]);

  return (
    <>
      {isLoading ? <p>Loading</p> : <MovieDetails movie={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Review</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsPage;
