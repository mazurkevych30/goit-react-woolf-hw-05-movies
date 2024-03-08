const { Link, Outlet } = require('react-router-dom');

const Information = ({ state }) => {
  return (
    <div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={state}>
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Information;
