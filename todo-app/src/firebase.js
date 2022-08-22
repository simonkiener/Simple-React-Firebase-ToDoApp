import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKVGv_KsXFlGnRh2bzNFgKe9v5jgPUchA",
    authDomain: "todo-react-firebase-test.firebaseapp.com",
    projectId: "todo-react-firebase-test",
    storageBucket: "todo-react-firebase-test.appspot.com",
    messagingSenderId: "82413591548",
    appId: "1:82413591548:web:cbc23ae8484683c53e3079",
    measurementId: "G-ZJS705PRCJ"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
