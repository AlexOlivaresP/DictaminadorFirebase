
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

registro.addEventListener('click', (e)=> {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("usuario Creado");
        // auth.SignOut();
        sendEmailVerification(auth.currentUser).then(()=>{
            alert('Se ha enviado un correo de verificacion');
        });

    }).catch( error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
} );