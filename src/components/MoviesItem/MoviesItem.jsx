import { Link, useLocation } from 'react-router-dom';

const MoviesItem = ({ item }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${item.id}`} state={location}>
        {item.title}
      </Link>
    </li>
  );
};

export default MoviesItem;
