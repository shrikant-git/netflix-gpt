// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNXJwzKlj02s25ZBXbNzKUItfcNLMMKF0',
  authDomain: 'netflixgpt-52286.firebaseapp.com',
  projectId: 'netflixgpt-52286',
  storageBucket: 'netflixgpt-52286.appspot.com',
  messagingSenderId: '940613762752',
  appId: '1:940613762752:web:7517819f0fc96737f37725',
  measurementId: 'G-ZXPHEJL1KT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
