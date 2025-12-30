import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const postRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postRef, {
      text,
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      createdAt: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div>
      <textarea onChange={e => setText(e.target.value)} value={text} />
      <button onClick={createPost}>게시</button>
    </div>
  );
};

export default Home;
