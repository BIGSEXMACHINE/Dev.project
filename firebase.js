// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp2xaj8CBjK8l-Bv60enUyidXk9RK-gMQ",
    authDomain: "devproject-2f119.firebaseapp.com",
    projectId: "devproject-2f119",
    storageBucket: "devproject-2f119.appspot.com",
    messagingSenderId: "183313016205",
    appId: "1:183313016205:web:1dded865939eedfc99c9c4",
    measurementId: "G-FJ594Y164E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);