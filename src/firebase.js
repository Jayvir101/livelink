import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCQMDj3-09hT069jeDoNxm1GDOBIl12ugU",

  authDomain: "livelink-55a39.firebaseapp.com",

  projectId: "livelink-55a39",

  storageBucket: "livelink-55a39.appspot.com",

  messagingSenderId: "462086518789",

  appId: "1:462086518789:web:60ba3b3b3876f85d8e046c"

});

// Initialize Firebase

export const auth = app.auth()
export default app
