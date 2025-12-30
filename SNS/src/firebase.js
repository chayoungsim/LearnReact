import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUK2iUtIx6ytlrW10GDykJcaZcKhiDwY0",
  authDomain: "my-sns-project-e728a.firebaseapp.com",
  projectId: "my-sns-project-e728a",
  storageBucket: "my-sns-project-e728a.firebasestorage.app",
  messagingSenderId: "203056495148",
  appId: "1:203056495148:web:068b37439408c8bf602f89",
  measurementId: "G-736ZGFTPGG"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);


// Authentication 인스턴스 내보내기
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
