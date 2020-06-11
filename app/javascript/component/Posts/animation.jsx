import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Anim(props) {
  const container = useRef(null);
  const animationDataVar = props.code;
  const url = props.attributes.url;

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
    <div className="post-wrapper">
      <Link to={`/posts/${props.attributes.slug}`}>
        <div className="container" ref={container}></div>
      </Link>
      <div className="post-animation-title">{props.attributes.title}</div>
      <div className="post-animation-score">{props.attributes.avg_score}</div>
    </div>
  );
}

export default Anim;
