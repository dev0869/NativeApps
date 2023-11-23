// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// export const firebaseConfig = {
//   apiKey: "AIzaSyD8gzqszzDP6oqhwrrgeiXZwBTx_sSSbj4",
//   authDomain: "native-a4633.firebaseapp.com",
//   projectId: "native-a4633",
//   storageBucket: "native-a4633.appspot.com",
//   messagingSenderId: "540550381865",
//   appId: "1:540550381865:web:ffcffd146a6c479657f738",
//   measurementId: "G-029JHPHWK8",
// };
// !firebase.apps.length && firebase.initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

export const firebaseConfig = {
  apiKey: "AIzaSyD8gzqszzDP6oqhwrrgeiXZwBTx_sSSbj4",
  authDomain: "native-a4633.firebaseapp.com",
  projectId: "native-a4633",
  storageBucket: "native-a4633.appspot.com",
  messagingSenderId: "540550381865",
  appId: "1:540550381865:web:ffcffd146a6c479657f738",
  measurementId: "G-029JHPHWK8",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.apps[0];

// const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore(app);
const storage = getStorage();
export { app, auth, database, storage };
