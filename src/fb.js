import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB-RS_-GmeDIyhktl0MHddV-Poil7J5-g",
    authDomain: "web-space-51973.firebaseapp.com",
    databaseURL: "https://web-space-51973.firebaseio.com",
    projectId: "web-space-51973",
    storageBucket: "web-space-51973.appspot.com",
    messagingSenderId: "780724800626",
    appId: "1:780724800626:web:fbe32f877a72aafc7c06eb",
    measurementId: "G-E8MSV1HVJR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true });

export default db;