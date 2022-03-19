// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpeW006pjnxvtW3wkDmfFZk2ioq0wsZTU",
    authDomain: "react-native-movies-47bc3.firebaseapp.com",
    projectId: "react-native-movies-47bc3",
    storageBucket: "react-native-movies-47bc3.appspot.com",
    messagingSenderId: "700926603882",
    appId: "1:700926603882:web:0318c95228139d279cd013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default {
    app,
    db
}