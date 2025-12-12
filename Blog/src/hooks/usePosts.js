import { useState, useEffect } from "react";
import * as postsApi from "../api/posts";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await postsApi.fetchPosts();
      setPosts(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { posts, setPosts, isLoading, error, reload: load };
}
