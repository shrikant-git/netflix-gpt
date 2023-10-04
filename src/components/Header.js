import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const hangleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={hangleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier}>{language.name}</option>
              ))}
            </select>
          )}
          <button
            className="p-4 mx-4 my-2 m-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <img className="w-12 h-12" src={USER_AVATAR} alt="logo" />
          <p className="text-white">{user?.displayName}</p>
          <button className="text-white" onClick={handleButtonClick}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
