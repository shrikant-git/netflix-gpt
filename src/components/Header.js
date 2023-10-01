import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth } from '../utils/firebase';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            src="https://occ-0-3374-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
            alt="logo"
          />
          <p>{user?.displayName}</p>
          <button onClick={handleButtonClick}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
