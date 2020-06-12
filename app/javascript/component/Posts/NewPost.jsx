import React, { useState } from "react";
import axios from "axios";
import slugify from "react-slugify";

function NewPost() {
  const [newPost, setNewPost] = useState({
    title: "",
    url: "",
    code: "",
    slug: "",
  });

  function inputChange(event) {
    const { name, value } = event.target;
    const slug = slugify(newPost.title);
    setNewPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        slug: slug,
      };
    });
    console.log(newPost);
  }

  function formSubmit() {
    event.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").textContent;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    // const user_id = 1;

    const url = "/api/v1/posts";

    const payload = {
      title: newPost.title,
      url: newPost.url,
      code: newPost.code,
      slug: newPost.slug,
      user_id: 1,
    };
    console.log("payload", payload);

    axios
      .post(url, payload)
      .then((response) => {
        debugger;

        setNewPost({
          title: "",
          url: "",
          code: "",
          slug: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Share your design</h3>
      <form onSubmit={formSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={inputChange}
          value={newPost.title}
        />
        <br />
        <input
          name="url"
          type="text"
          placeholder="URL"
          onChange={inputChange}
          value={newPost.url}
        />
        <br />
        <textarea
          name="code"
          rows="10"
          placeholder="Paste your code here"
          onChange={inputChange}
          value={newPost.code}
        />
        <br />
        <button type="submit">Share</button>
      </form>
    </div>
  );
}

export default NewPost;
