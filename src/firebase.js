import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYilDVeMf0XQOiHFf5ZRfhUKEO0wJxdIs",
  authDomain: "netflix-clone-redux-1f82f.firebaseapp.com",
  projectId: "netflix-clone-redux-1f82f",
  storageBucket: "netflix-clone-redux-1f82f.appspot.com",
  messagingSenderId: "1017709390982",
  appId: "1:1017709390982:web:2abe2af5fc130b5dabb507",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
