// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLutcpSKET2a9L-rXRWG6b8_4Gm9gQ-C8',
  authDomain: 'ema-john-simple-37857.firebaseapp.com',
  projectId: 'ema-john-simple-37857',
  storageBucket: 'ema-john-simple-37857.appspot.com',
  messagingSenderId: '63500478176',
  appId: '1:63500478176:web:fdbcc5b312c65d78ae5285',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;