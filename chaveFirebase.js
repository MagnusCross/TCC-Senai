
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
// aqui você faz a coneção com o banco de dados
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

export const db = getDatabase();