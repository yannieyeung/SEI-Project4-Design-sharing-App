import React, { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../packs/application.scss";

function ReviewForm(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const scoreArr = [1, 2, 3, 4, 5].map((score, index) => {
    const value = index + 1;
    return (
      <Fragment>
        <label
          onClick={props.clickStar.bind(this, score)}
          //   onClick={() => {
          //     setRating(value);
          //   }}
        >
          <FaStar
            className="review-star"
            size={25}
            color={value <= hover || rating ? "ffc107" : "#e4e5e9"}
            onMouseEnter={() => {
              setHover(value);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
          />
          <input
            className="start-radio"
            type="radio"
            value={score}
            name="rating"
            checked={props.review.score == score}
            onChange={() => {
              console.log("======chose=====", score);
            }}
            id={`rating-${score}`}
            onClick={() => {
              setRating(value);
            }}
          />
        </label>
      </Fragment>
    );
  });
  return (
    <div className="form-wrapper">
      <form onSubmit={props.formSubmit} className="review-form">
        <h4>Share your thoughts</h4>
        <input
          onChange={props.formInputChange}
          value={props.review.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <br />
        <input
          onChange={props.formInputChange}
          value={props.review.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <input value="1" type="hidden" name="user_id" />
        <div className="rating-container">
          <h4>Share your rating</h4>
          <div className=""></div>
          {scoreArr}
        </div>
        <button type="submit">Share</button>
      </form>
    </div>
  );
}

export default ReviewForm;
