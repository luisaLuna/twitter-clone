import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8vMeqrVUFxUU9xVdvaygtp-Kp_9ZSt6o",
  authDomain: "twitter-clone-5dc65.firebaseapp.com",
  projectId: "twitter-clone-5dc65",
  storageBucket: "twitter-clone-5dc65.appspot.com",
  messagingSenderId: "561809117216",
  appId: "1:561809117216:web:421f744588ffbc55982c45",
  measurementId: "G-3KS3322D3K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;