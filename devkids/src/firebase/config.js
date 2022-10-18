import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbT_NFjZfhzvAaWa0BQ8aY1Eb62KlVdxQ",
  authDomain: "devkids-ed4c4.firebaseapp.com",
  projectId: "devkids-ed4c4",
  storageBucket: "devkids-ed4c4.appspot.com",
  messagingSenderId: "120269269318",
  appId: "1:120269269318:web:7b822510a8380b205c1d47"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};