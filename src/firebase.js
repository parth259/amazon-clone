const firebaseConfig = {
  apiKey: "AIzaSyCKawemC0Xsm_X7joKIAYBdqenVLVCbi3A",
  authDomain: "clone-d5468.firebaseapp.com",
  databaseURL: "https://clone-d5468-default-rtdb.firebaseio.com",
  projectId: "clone-d5468",
  storageBucket: "clone-d5468.appspot.com",
  messagingSenderId: "716927749097",
  appId: "1:716927749097:web:5ffad3aaae592019ef5978",
  measurementId: "G-71NJW19JXY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
