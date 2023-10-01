import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-500" />
        )}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-500" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-500" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? 'New to Netflix? Sign Up now' : 'Already Registered? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
