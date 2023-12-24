// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/database'; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv9gC7jtBc3I1a2f1iZW-FbgfJ-En-gTI",
  authDomain: "dance-class-a65c1.firebaseapp.com",
  databaseURL: "https://dance-class-a65c1-default-rtdb.firebaseio.com",
  projectId: "dance-class-a65c1",
  storageBucket: "dance-class-a65c1.appspot.com",
  messagingSenderId: "611595268882",
  appId: "1:611595268882:web:0577b18d28207046ba79cb",
  measurementId: "G-BSR1NR3QYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
