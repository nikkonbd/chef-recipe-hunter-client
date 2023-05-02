// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4KRLd41Bj4bELPTEDZdceNTBGt3eP7AU",
    authDomain: "chef-recipe-hunter-40a03.firebaseapp.com",
    projectId: "chef-recipe-hunter-40a03",
    storageBucket: "chef-recipe-hunter-40a03.appspot.com",
    messagingSenderId: "379219794563",
    appId: "1:379219794563:web:996ce1de8dddc4964fd9b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;