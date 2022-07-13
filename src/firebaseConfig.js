import firebase from "firebase";

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
const firebaseConfig = {
  apiKey: "AIzaSyCW9Xd2RTKbN9LGs3NDfuIJBN2Qp7czlyE",
  authDomain: "final-project-351519.firebaseapp.com",
  projectId: "final-project-351519",
  storageBucket: "final-project-351519.appspot.com",
  messagingSenderId: "812802113610",
  appId: "1:812802113610:web:30ac2f6a19fb567303a6b3",
  measurementId: "G-77R6KB7GWL"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
