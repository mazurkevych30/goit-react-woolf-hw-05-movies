import MoviesItem from 'components/MoviesItem/MoviesItem';

const Movies = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <MoviesItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Movies;
