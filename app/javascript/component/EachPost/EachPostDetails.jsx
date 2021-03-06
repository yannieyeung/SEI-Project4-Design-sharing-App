import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./style.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DownloadBtn from "../EachPost/DownloadBtn";
import { FaStar } from "react-icons/fa";

function EachPostDetails(props) {
  const container = useRef(null);
  const url = props.attributes.url;
  const total = props.reviewNum.length;
  const animationDataVar = JSON.parse(props.attributes.code);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationDataVar,
      //   path: url,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, []);

  const scoreArr = [1, 2, 3, 4, 5].map((score, index) => {
    const value = index + 1;
    const avg_score = props.attributes.avg_score;
    return (
      <FaStar
        className="avg-score-review-star"
        size={25}
        color={value <= avg_score ? "#8a7ef8" : "#e4e5e9"}
      />
    );
  });

  return (
    <div className="each-post-details-container">
      <div className="post-animation-container">
        <Link to={`/`}>
          <div className="postAnimation" ref={container}></div>
        </Link>
      </div>
      <div className="post-info">
        <h3>{props.attributes.title}</h3>
      </div>

      <div className="ratings">{scoreArr}</div>
      <div className="total-reviews">{total} User Reviews</div>
      <div className="average-score">{props.attributes.avg_score} out of 5</div>
      <div className="post-button-div">
        <span>
          <Link to={`/posts/${props.attributes.slug}/instruction`}>
            <button className="get-code-btn">Instruction</button>
          </Link>
          <DownloadBtn code={props.attributes.code} />
        </span>
      </div>
    </div>
  );
}

export default EachPostDetails;
