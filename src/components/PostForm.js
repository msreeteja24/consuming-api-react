import React, { useState } from "react";
import { createPost } from "../services/postService";

export default function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = () => {
    createPost({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //To prevent the reload of page when form is submitted

    addPost();

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Create Post </h1>
      <div>Title</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div>Body</div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
}
