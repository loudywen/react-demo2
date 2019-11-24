import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCZJ_xlsaoK2Kj0QDVANph9sFkVxb-dxA",
  authDomain: "react-demo2.firebaseapp.com",
  databaseURL: "https://react-demo2.firebaseio.com",
  projectId: "react-demo2",
  storageBucket: "react-demo2.appspot.com",
  messagingSenderId: "69744371114",
  appId: "1:69744371114:web:b22dd31603a96c5330b7d3",
  measurementId: "G-YD5W1Q0TPB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
