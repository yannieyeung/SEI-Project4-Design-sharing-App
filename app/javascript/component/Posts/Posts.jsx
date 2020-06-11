import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Anim from "./animation";
import "../../packs/application.scss";

function Posts() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "/api/v1/posts.json";

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data.data);
        console.log(Posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Posts.length]);

  const postList = Posts.map((post) => {
    return (
      <div className="post-grid">
        {/* <h3>{post.attributes.title}</h3> */}
        <Anim key={post.attributes.title} attributes={post.attributes} />
      </div>
    );
  });

  return (
    <div className="home-page">
      <div className="main-header">
        <h1>Design Sharing is a platform that shares Designs</h1>
        <div className="sub-main-header">Enjoy!</div>
      </div>
      {postList}
    </div>
  );
}

export default Posts;
