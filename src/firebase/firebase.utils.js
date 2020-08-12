import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAdVXzaKsIk-5R5QTvlKKRct07t1-oD_ow",
    authDomain: "smeclothing-db.firebaseapp.com",
    databaseURL: "https://smeclothing-db.firebaseio.com",
    projectId: "smeclothing-db",
    storageBucket: "smeclothing-db.appspot.com",
    messagingSenderId: "216823268151",
    appId: "1:216823268151:web:1d5fdcb98d43216cb210b2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;