import React, { useEffect, useRef, Fragment } from "react";
import lottie from "lottie-web";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Anim(props) {
  const container = useRef(null);
  const animationDataVar = JSON.parse(props.attributes.code);
  const url = props.attributes.url;

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationDataVar,
      // path: url,
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
        size={15}
        color={value <= avg_score ? "#8a7ef8" : "#e4e5e9"}
      />
    );
  });

  return (
    <div className="post-wrapper">
      <div className="animation-wrapper">
        <Link to={`/posts/${props.attributes.slug}`}>
          <div className="container" ref={container}></div>
        </Link>
      </div>
      <div className="title-rating-wrapper">
        <div className="post-animation-title">{props.attributes.title}</div>
        <div className="post-animation-score">{scoreArr}</div>
      </div>
    </div>
  );
}

export default Anim;
