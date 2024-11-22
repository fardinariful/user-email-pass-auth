// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFwWcn5uHmAe2_e2okfwh3n3xY3QV9z2A",
  authDomain: "user-email-pass-authenti-477a8.firebaseapp.com",
  projectId: "user-email-pass-authenti-477a8",
  storageBucket: "user-email-pass-authenti-477a8.firebasestorage.app",
  messagingSenderId: "821589953432",
  appId: "1:821589953432:web:950b98231054f3d129f9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;