import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import Anim from "./animation";
import "../../packs/application.scss";
import lottie from "lottie-web";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Pagination from "react-js-pagination";

function Posts() {
  const [Posts, setPosts] = useState([]);
  var url = "https://assets3.lottiefiles.com/packages/lf20_s9VNOB.json";
  const container = useRef(null);

  // const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      // animationData: animationDataVar,
      path: url,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, []);

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

  // function pageChange() {
  //   setActivePage({ pageNumber });
  // }

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
      <div className="container" ref={container}></div>

      {/* <div className="i-want-this-fixed"> */}
      <div className="main-header">
        <h1>DESIGN</h1>
        <h1 style={{ letterSpacing: "9px" }}>SHARE</h1>
        <h3>is a platform that shares Designs</h3>
        <Link to={`/posts/new`}>
          <button className="share-btn">
            <h3>Share yours</h3>
          </button>
        </Link>
      </div>

      <div className="all-posts-wrapper">{postList}</div>
      {/* </div> */}
      {/* 
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={2}
          totalItemsCount={Posts.length}
          pageRangeDisplayed={5}
          onChange={pageChange}
        />
      </div> */}
    </div>
  );
}

export default Posts;
