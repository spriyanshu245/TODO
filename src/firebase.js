const firebaseConfig = {
    apiKey: "AIzaSyCctBYtbMr5e3v-fKR2kTjhYWqs6WmpaN8",
    authDomain: "todo-app-cfd7f.firebaseapp.com",
    databaseURL: "https://todo-app-cfd7f.firebaseio.com",
    projectId: "todo-app-cfd7f",
    storageBucket: "todo-app-cfd7f.appspot.com",
    messagingSenderId: "440290257439",
    appId: "1:440290257439:web:078a129bd14acfcb8e032a",
    measurementId: "G-YD1G9RP4CZ"
  };

  import firebase from "firebase" ;

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCctBYtbMr5e3v-fKR2kTjhYWqs6WmpaN8",
        authDomain: "todo-app-cfd7f.firebaseapp.com",
        databaseURL: "https://todo-app-cfd7f.firebaseio.com",
        projectId: "todo-app-cfd7f",
        storageBucket: "todo-app-cfd7f.appspot.com",
        messagingSenderId: "440290257439",
        appId: "1:440290257439:web:078a129bd14acfcb8e032a",
        measurementId: "G-YD1G9RP4CZ"
  });

  const db = firebaseApp.firestore();

  export {db}; 