import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const [popularMovies, setPopularMovies] = useState();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    setPopularMovies(json.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return { popularMovies };
};

export default usePopularMovies;
