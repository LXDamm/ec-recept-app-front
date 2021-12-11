import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAAKi27X1dYZZmKtnzqt7qgvhXio3hRuVE",
    authDomain: "recept-1a614.firebaseapp.com",
    projectId: "recept-1a614",
    storageBucket: "recept-1a614.appspot.com",
    messagingSenderId: "712662391365",
    appId: "1:712662391365:web:25c40a0ed49aca71c4212c"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export default app;