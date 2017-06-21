import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBp4WfcFIutxqzrGbCxcro9YxRUhHgoWe4",
  authDomain: "feedback-4a295.firebaseapp.com",
  databaseURL: "https://feedback-4a295.firebaseio.com",
  projectId: "feedback-4a295",
  storageBucket: "feedback-4a295.appspot.com",
  messagingSenderId: "952975869388"
};
firebase.initializeApp(config);

window.firebase = firebase;
