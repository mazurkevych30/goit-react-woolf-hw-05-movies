import { Link } from 'react-router-dom';

const MoviesItem = ({ item }) => {
  return (
    <li>
      <Link to={`/movies/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default MoviesItem;
