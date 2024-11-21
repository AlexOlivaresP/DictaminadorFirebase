import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

    const firebaseConfig = {
  apiKey: "AIzaSyAEA7RfayOXIc2jligR5KW0VXoLWPSCi_E",
  authDomain: "dictaminador3312.firebaseapp.com",
  databaseURL: "https://dictaminador3312-default-rtdb.firebaseio.com",
  projectId: "dictaminador3312",
  storageBucket: "dictaminador3312.appspot.com",
  messagingSenderId: "236427358093",
  appId: "1:236427358093:web:97cc9120ccac561ae257c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

login.addEventListener('click', (e)=> {
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario Logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/user-disabled')
            alert('El usuario ha sido deshabilitado');
        else if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/user-not-found')
            alert('El usuario no existe');
        else if(errorCode == 'auth/wrong-password')
            alert('Contraseña incorrecta');
    });
});

cerrar.addEventListener('click', (e)=>{
    auth.signOut().then(()=>{
        alert('Sesion cerrada');
    }).catch((error)=>{
        alert('Error al cerrar sesion')
    });
});


auth.onAuthStateChanged(user => {
    if(user){
        console.log('usuario activo')
        var email = user.emailVerified;
        if(email){
            window.open("https://www.google.com/")
        } else{
            auth.signOut();
        }
    } else{
        console.log('usurio inactico')
    }
});
