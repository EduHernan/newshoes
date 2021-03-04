import firebase from 'firebase/app'
import '@firebase/firestore'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyCdhhOpgz6qfPfmdQ3lgb_asIjVTn9Tjvw",
    authDomain: "coderhouse-goodclothes.firebaseapp.com",
    projectId: "coderhouse-goodclothes",
    storageBucket: "coderhouse-goodclothes.appspot.com",
    messagingSenderId: "544174166321",
    appId: "1:544174166321:web:b4ab802a5ca2fa7d066010"

});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}