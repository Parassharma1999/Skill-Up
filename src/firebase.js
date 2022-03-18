import {initializeApp} from "firebase/app"
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey:"AIzaSyBPgnJfdoMMMpgLQBSyDB5CmfmT9WUjCwo",
  authDomain: "auth-development-22dc5.firebaseapp.com",
  projectId: "auth-development-22dc5",
  storageBucket: "auth-development-22dc5.appspot.com",
  messagingSenderId: "813648378825",
  appId: "1:813648378825:web:ccfc5c710891b131220618"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db= getFirestore(app);
export const GoogleAuth = new GoogleAuthProvider();
export const FacebookAuth = new FacebookAuthProvider();
