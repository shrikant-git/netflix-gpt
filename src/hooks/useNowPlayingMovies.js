import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const [nowPlayingMovies, setNowPlayingMovies] = useState();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    setNowPlayingMovies(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return { nowPlayingMovies };
};

export default useNowPlayingMovies;
