import css from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    overview,
    poster_path,
    vote_average,
    genres = [],
  } = movie;

  return (
    <div className={css.movie_details_container}>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt="original_title"
        />
      )}
      <div>
        <h2>{original_title}</h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genre</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
