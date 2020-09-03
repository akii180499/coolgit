import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBlB77yt4h5mtZEaJsqw7Zm3rMwqcJQW7Y",
  authDomain: "whatsapp-clone-cea9a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cea9a.firebaseio.com",
  projectId: "whatsapp-clone-cea9a",
  storageBucket: "whatsapp-clone-cea9a.appspot.com",
  messagingSenderId: "313403673125",
  appId: "1:313403673125:web:a4ebab3e89bbe8348c0dcc",
  measurementId: "G-XQPVZ2BB8G"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;