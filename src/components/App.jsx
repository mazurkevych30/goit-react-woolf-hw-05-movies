import { getTrendingMoviesApi } from 'api/movies';
import MainLayout from 'layouts/MainLayout/MainLayot';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  getTrendingMoviesApi();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route />
        <Route />
      </Route>
    </Routes>
  );
};
