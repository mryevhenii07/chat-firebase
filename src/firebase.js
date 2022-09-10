import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBROTYAkwc8lOOrEsOXvWw9WSxT1fr7Uyg",
  authDomain: "chat-app-eab81.firebaseapp.com",
  projectId: "chat-app-eab81",
  storageBucket: "chat-app-eab81.appspot.com",
  messagingSenderId: "796478539910",
  appId: "1:796478539910:web:35aeded7a7d8a99a01a907",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
