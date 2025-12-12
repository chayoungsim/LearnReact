import client from "./client";

export const fetchPosts = (params = {}) =>
  client.get("/posts", { params }).then((res) => res.data);

export const fetchPost = (id) => client.get(`/posts/${id}`).then((res) => res.data);

export const createPost = (payload) =>
  client.post("/posts", payload).then((res) => res.data);

export const updatePost = (id, payload) =>
  client.put(`/posts/${id}`, payload).then((res) => res.data);

export const deletePost = (id) =>
  client.delete(`/posts/${id}`).then((res) => res.data);
