import { initializeApp } from "firebase/app";
import {
  setPersistence,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0avTg2p0EWMpZLXB3fDlP-RL_x6VVlVI",
  authDomain: "greenie-f3707.firebaseapp.com",
  projectId: "greenie-f3707",
  storageBucket: "greenie-f3707.appspot.com",
  messagingSenderId: "1081164120563",
  appId: "1:1081164120563:web:308a71e2a9fca2d0e0d286",
  measurementId: "G-K7SS9GJ64F",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//auth
export const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);

//firestore
export const db = getFirestore();

export const getUsersDetails = async () => {
  const usersDocRef = doc(db, "users", "users");
  const usersDocSnapshot = await getDoc(usersDocRef);

  if (usersDocSnapshot.exists()) {
    return usersDocSnapshot.data().usersData;
  } else {
    return [];
  }
};

export const updateUsersData = async (newUserData) => {
  const usersDocRef = doc(db, "users", "users");
  const usersDocSnapshot = await getDoc(usersDocRef);

  if (usersDocSnapshot.exists()) {
    await updateDoc(usersDocRef, { usersData: newUserData });
  } else {
    await setDoc(usersDocRef, { usersData: newUserData });
  }
};
