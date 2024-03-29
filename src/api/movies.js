import axios from 'axios';

export const getTrendingMoviesApi = async (page = 1) => {
  const options = {
    params: {
      api_key: '69fc22f0e75623f9b4cdd9804ff159f8',
      language: 'en-US',
      page,
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    options
  );

  return data;
};

export const getMovieDeteilsApi = async id => {
  const options = {
    params: {
      api_key: '69fc22f0e75623f9b4cdd9804ff159f8',
      language: 'en-US',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    options
  );

  return data;
};

export const getMovieCastApi = async id => {
  const options = {
    params: {
      api_key: '69fc22f0e75623f9b4cdd9804ff159f8',
      language: 'en-US',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    options
  );
  return data;
};

export const getMovieReviewsApi = async id => {
  const options = {
    params: {
      api_key: '69fc22f0e75623f9b4cdd9804ff159f8',
      language: 'en-US',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    options
  );

  return data;
};

export const getSearchMoviesApi = async query => {
  const options = {
    params: {
      api_key: '69fc22f0e75623f9b4cdd9804ff159f8',
      language: 'en-US',
      query,
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    options
  );
  return data;
};
