import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import EachPostDetails from "./EachPostDetails";
import ReviewForm from "./ReviewForm";
import AllReview from "./AllReview";

function EachPost(props) {
  const [post, setPost] = useState({});
  const [review, setReview] = useState({});
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    console.log(props);
    const slug = props.match.params.slug;
    const url = `/api/v1/posts/${slug}`;

    axios
      .get(url)
      .then((response) => {
        setPost(response.data.data);
        setIsSet(true);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function inputChange(event) {
    // console.log( "=====" event.target.name, "=====", event.target.value);
    const { name, value } = event.target;

    setReview({
      ...review,
      [name]: value,
      user_id: 1,
    });
    console.log("review", review);
  }

  function onSubmit(event) {
    // event.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").textContent;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const post_id = post.id;
    // console.log("by pressing share button =====", post_id, "=====");

    const url = "/api/v1/reviews";

    axios
      .post(url, { review, post_id })
      .then((response) => {
        // debugger;
        const included = [...post.included, response.data.data];
        setPost({ ...post, included });
        // setPost((prevVal) => {
        //   const postArr = post;
        //   postArr.push(response.data.data);
        //   return {
        //     ...prevVal,
        //     post: postArr,
        //   };

        // });
        setReview({
          title: "",
          description: "",
          score: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function clickOnStar(score) {
    debugger;
    console.log(score);
    setReview({ ...review, score: score });
    console.log("bannnanananana", review);
  }

  return (
    <div className="each-post-container">
      {isSet && (
        <Fragment>
          <div className="animation-side">
            <EachPostDetails
              attributes={post.attributes}
              reviewNum={post.relationships.reviews.data}
            />

            <div className="reviews">
              <AllReview postId={post.id} />
            </div>
          </div>
          <div className="review-side">
            <div className="review-form">
              <ReviewForm
                formInputChange={inputChange}
                formSubmit={onSubmit}
                attributes={post.attributes}
                review={review}
                clickStar={clickOnStar}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default EachPost;
