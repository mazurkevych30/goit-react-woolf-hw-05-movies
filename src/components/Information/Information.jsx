import css from './Information.module.css';
const { Link, Outlet } = require('react-router-dom');

const Information = ({ state }) => {
  return (
    <div className={css.info_cont}>
      <h3>Additional information</h3>
      <ul className={css.info_list}>
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
    </div>
  );
};

export default Information;
