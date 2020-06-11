import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./style.scss";

function EachPostDetails(props) {
  const container = useRef(null);
  const url = props.attributes.url;
  const total = props.reviewNum.length;

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

  return (
    <div className="each-post-details-container">
      <div className="post-animation-container">
        <div className="postAnimation" ref={container}></div>
        <h3>{props.attributes.title}</h3>
        <button className="get-code-btn">Get Code Here</button>
      </div>
      <div className="total-reviews">{total} User Reviews</div>
      <div className="ratings"></div>
      <div className="avergae-score">{props.attributes.avg_score} out of 5</div>
    </div>
  );
}

export default EachPostDetails;
