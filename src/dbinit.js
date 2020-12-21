import firebase from 'firebase';

const dbConfig = {
  apiKey: "AIzaSyDE2fP3tLMPMZ5tHcuGkDkuhTG-BTFzabk",
  authDomain: "cleveroad-catalog.firebaseapp.com",
  databaseURL: "https://cleveroad-catalog-default-rtdb.firebaseio.com",
  projectId: "cleveroad-catalog",
  storageBucket: "cleveroad-catalog.appspot.com",
  messagingSenderId: "893663043811",
  appId: "1:893663043811:web:d7f85973eeb2228f9025d6"
};

firebase.initializeApp(dbConfig);

export const db = firebase.database();