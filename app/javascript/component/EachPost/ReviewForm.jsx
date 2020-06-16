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
        <label>
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
            onClick={
              () => {
                props.clickStar(score);
                setRating(value);
              }

              //   props.clickStar.bind(this, score)
              //   setRating(value);
            }
            // onClick={props.clickStar.bind(this, score)}
          />
          <FaStar
            className="review-star"
            size={25}
            color={value <= (hover || rating) ? "#8a7ef8" : "#e4e5e9"}
            onMouseEnter={() => {
              setHover(value);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
          />
        </label>
      </Fragment>
    );
  });
  return (
    <div className="form-wrapper">
      <div className="form-wrapper2">
        <div className="form-wrapper3">
          <div className="form-wrapper4">
            <form onSubmit={props.formSubmit} className="review-form-form">
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
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
