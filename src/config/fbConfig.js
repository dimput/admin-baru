import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDSn2H_kB119OZHlUFosL-DeQmBGwnl3Ck",
  authDomain: "antarwisata-1dd73.firebaseapp.com",
  databaseURL: "https://antarwisata-1dd73.firebaseio.com",
  projectId: "antarwisata-1dd73",
  storageBucket: "antarwisata-1dd73.appspot.com",
  messagingSenderId: "1045784575767",
  appId: "1:1045784575767:web:26268193dd101c75"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


const databaseRef = firebase.database().ref();
export const infoRef = databaseRef.child("agents");
export const todosRef = databaseRef.child("agents");
export const requestsRef = databaseRef.child("Requests");
export const pemesananRef = databaseRef.child("Requests");

export default firebase     