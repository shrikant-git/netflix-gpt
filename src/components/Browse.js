import { useEffect } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
