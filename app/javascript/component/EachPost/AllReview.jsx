import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function AllReview(props) {
  const [Reviews, setReview] = useState([]);

  useEffect(() => {
    const url = "/api/v1/reviews.json";
    const post_id = props.postId;

    axios
      .get(url)
      .then((response) => {
        //   debugger;
        const currentReview = response.data.data.filter((item) => {
          return item.attributes.post_id == post_id;
        });
        setReview(currentReview);
        // console.log(currentReview);
        console.log("review state", Reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Reviews.length]);

  const oneReview = Reviews.map((review) => {
    return (
      <div className="one-review">
        <p className="one-review-title">{review.attributes.title}</p>
        <p className="one-review-description">
          {review.attributes.description}
        </p>
      </div>
    );
  });

  return <div className="all-reviews-container">{oneReview}</div>;
}

export default AllReview;
