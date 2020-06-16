import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import slugify from "react-slugify";
import lottie from "lottie-web";
import { FaChevronLeft } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NewPost() {
  const [newPost, setNewPost] = useState({
    title: "",
    url: "",
    code: "",
    slug: "",
  });

  const [isPost, setIsPost] = useState(false);

  const url = "https://assets4.lottiefiles.com/packages/lf20_DHkwtA.json";
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: url,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, []);

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
    setIsPost(false);
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
        // debugger;

        setNewPost({
          title: "",
          url: "",
          code: "",
          slug: "",
        });
        setIsPost(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="form-share-anim">
        <div className="container" ref={container}></div>
      </div>
      <div className="share-form">
        {isPost && <p>Thank you! Your design is shared!</p>}
        <h3>Share your design</h3>
        <form onSubmit={formSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={inputChange}
            value={newPost.title}
          />

          <input
            name="url"
            type="url"
            placeholder="URL"
            onChange={inputChange}
            value={newPost.url}
          />
          <br />
          {/* <label>Code</label> */}
          <textarea
            name="code"
            rows="10"
            placeholder="Paste your JSON code here"
            onChange={inputChange}
            value={newPost.code}
          />
          <br />

          <button type="submit">
            <h3>Share</h3>
          </button>
          <Link to="/">
            <button className="cancel">
              <h3>Cancel</h3>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
