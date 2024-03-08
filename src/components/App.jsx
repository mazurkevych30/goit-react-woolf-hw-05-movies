import { getTrendingMoviesApi } from 'api/movies';
import MainLayout from 'layouts/MainLayout/MainLayot';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  getTrendingMoviesApi();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
