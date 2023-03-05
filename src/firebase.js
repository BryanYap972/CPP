import { initializeApp } from  'firebase/app' ;

const firebaseConfig = {
    apiKey: "AIzaSyDxe4gsumNlRk7KTGJdAg05nv2D1L1xGh8",
    authDomain: "bt3103-43088.firebaseapp.com",
    projectId: "bt3103-43088",
    storageBucket: "bt3103-43088.appspot.com",
    messagingSenderId: "983102413085",
    appId: "1:983102413085:web:26f80e6eca670725e2a9f4",
    measurementId: "G-M4P7C383XY"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;