import firebase from 'firebase';

/**
 * Connection of Firebase from client to database
 */

 const firebaseConfig = {
    apiKey: "AIzaSyCaF-PrLklCwSPxepbzS53GrWCOCSXDuZE",
    authDomain: "connectchat-b94b7.firebaseapp.com",
    projectId: "connectchat-b94b7",
    storageBucket: "connectchat-b94b7.appspot.com",
    messagingSenderId: "1051639681124",
    appId: "1:1051639681124:web:59efac14f3b5dc4f3a4f71"
  };
  
// Initialization of App for 1st time if not initialized on the first place
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Access to database
const db = app.firestore();

// Access to authentication
const auth = app.auth();

// Access to the provider Google
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

