import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYsHT7uyjq99_-uxHX64Oyb17O_tBesb0",
    authDomain: "primepark-3a001.firebaseapp.com",
    projectId: "primepark-3a001",
    storageBucket: "primepark-3a001.appspot.com",
    messagingSenderId: "1051054426749",
    appId: "1:1051054426749:web:28240fd1114b8f6ebf3f14",
    measurementId: "G-S15MSS45XL"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });