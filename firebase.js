import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATz08JVFeVQH5muJOaG-S2mQGEVixZqZI",
    authDomain: "whatsapp-2-0-ee259.firebaseapp.com",
    projectId: "whatsapp-2-0-ee259",
    storageBucket: "whatsapp-2-0-ee259.appspot.com",
    messagingSenderId: "103991148955",
    appId: "1:103991148955:web:1b6537cd2c377548fca13e",
    measurementId: "G-CTR8SMCB2Q"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };