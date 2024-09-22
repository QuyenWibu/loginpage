// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIfyrNQJEBZmKILaD0GlQB8YSl39Gfkiw",
  authDomain: "semiar-20f86.firebaseapp.com",
  projectId: "semiar-20f86",
  storageBucket: "semiar-20f86.appspot.com",
  messagingSenderId: "993611704416",
  appId: "1:993611704416:web:89d1060398f9756449fb05",
  measurementId: "G-C64NLWC8EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    sendPasswordResetEmail(auth, email)
        .then(() => {
            messageElement.textContent = "Password reset email sent! Check your inbox.";
            messageElement.classList.add("text-green-500");
        })
        .catch((error) => {
            console.error(error);
            messageElement.textContent = "Error: " + error.message;
            messageElement.classList.add("text-red-500");
        });
});






onAuthStateChanged(auth, (user) => {
    if (user) {
      // Người dùng đã đăng nhập
      const uid = user.uid;
      console.log('Người dùng đã đăng nhập:', uid);
    } else {
      // Người dùng đã đăng xuất
      console.log('Người dùng đã đăng xuất');
    }
});