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

const signIn = document.getElementById('btnlogin');

signIn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      alert("Vui lòng nhập cả email và mật khẩu");
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     
        const user = userCredential.user;
        alert('Đăng nhập thành công');
        window.location.href = "main.html";
        console.log('Đăng nhập thành công:', user);
      })
      .catch((error) => {
      
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Có lỗi xảy ra');
        console.error('Lỗi đăng ký:', errorCode, errorMessage);
      });
});




document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  

  function hideLoader() {
      if (loader) {
          loader.style.display = 'none';
      }
  }
  
 
  const minLoadTime = 2000;
  let startTime = Date.now();
  
  function checkLoadTime() {
      let elapsedTime = Date.now() - startTime;
      let timeToWait = Math.max(0, minLoadTime - elapsedTime);
      
    
      setTimeout(hideLoader, timeToWait);
  }
  
  
  window.addEventListener('load', checkLoadTime);
});
