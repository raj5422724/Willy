import { firebase } from '@firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAAcQHrNQm_dVDGvyl69cZLmRuR5tpaswk",
    authDomain: "wireless-library-3c6b4.firebaseapp.com",
    projectId: "wireless-library-3c6b4",
    storageBucket: "wireless-library-3c6b4.appspot.com",
    messagingSenderId: "1034022941372",
    appId: "1:1034022941372:web:cb4089821b09e09f7096b9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();