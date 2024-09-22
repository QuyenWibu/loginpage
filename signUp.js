import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app); 

const signUp = document.getElementById('btnSignUp');

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      alert("Vui lòng nhập cả email và mật khẩu");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

       
        const userData = {
            email: email,
          
        };

        
        const userRef = ref(db, 'users/' + user.uid);

       
        set(userRef, userData)
          .then(() => {
            alert('Đăng ký thành công');
            console.log('Đăng ký thành công:', user);
            window.location.href = 'index.html';
          })
          .catch((error) => {
            console.error('Lỗi lưu dữ liệu:', error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Có lỗi xảy ra');
        console.error('Lỗi đăng ký:', errorCode, errorMessage);
      });
});