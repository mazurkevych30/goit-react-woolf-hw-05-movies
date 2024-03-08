import { getMovieDeteilsApi } from 'api/movies';
import Information from 'components/Information/Information';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleBack = () => {
    navigate(location.state ?? '/movies');
  };

  return (
    <>
      <button type="button" onClick={handleBack}>
        Go back
      </button>
      {isLoading ? <p>Loading</p> : <MovieDetails movie={movie} />}
      <Information state={location.state} />
    </>
  );
};

export default MovieDetailsPage;
