import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAEYKwcTko7q2d0wJCPRfcSSN0nQlKb47E",
  authDomain: "project-60-187b7.firebaseapp.com",
  databaseURL: "https://project-60-187b7-default-rtdb.firebaseio.com",
  projectId: "project-60-187b7",
  storageBucket: "project-60-187b7.appspot.com",
  messagingSenderId: "500237448294",
  appId: "1:500237448294:web:a86b0f844c4f60e0cfe9a7"
};
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase.database()
 

  