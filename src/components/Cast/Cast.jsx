import { getMovieCastApi } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieDeteils = async () => {
      try {
        const data = await getMovieCastApi(movieId);
        setCast(data.cast);
      } catch (error) {}
    };

    getMovieDeteils();
  }, [movieId]);

  return (
    <div>
      {!cast.length ? (
        <p>We don't have information about cast for this movie.</p>
      ) : (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <p>Character: {cast.character}</p>
              <p>Actor name: {cast.name}</p>
              <img
                width="140px"
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                alt={cast.name}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
