import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDybMvR0z8aDjQbd8ojBchM9JoG6NC200M",
    authDomain: "discord-clone-fd167.firebaseapp.com",
    databaseURL: "https://discord-clone-fd167.firebaseio.com",
    projectId: "discord-clone-fd167",
    storageBucket: "discord-clone-fd167.appspot.com",
    messagingSenderId: "534282527184",
    appId: "1:534282527184:web:8cf78a320e23b3362459d5",
    measurementId: "G-BL15YPSG7G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;