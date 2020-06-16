import React from "react";

function Instruction() {
  return (
    <div>
      <div className="para">
        <h3>Getting Started</h3>
        <p>Bodymovin can render Lottie JSON files on the web.</p>
        <p>
          First, get the bodymovin player javascript library. It is statically
          hosted at{" "}
          <a href="https://cdnjs.com/libraries/bodymovin">
            <nobr>https://cdnjs.com/libraries/bodymovin</nobr>
          </a>
          or you can get the javascript directly by clicking Get Player in the
          bodymovin plugin.
        </p>
      </div>
      <div className="code-snippet">
        <div className="text-wrapper">
          <p>
            {`<script src="js/bodymovin.js" type="text/javascript"></script>`}
          </p>
          <p>{`<!-- OR -->`}</p>
          <p>
            {`<script
            src="https://cdnjs.com/libraries/bodymovin"
            type="text/javascript"
          ></script>`}
          </p>
          <p className="bash-p">html</p>
        </div>
      </div>
      <div className="para">
        <p>Bodymovin is also available on npm and bower.</p>
        <p>Then playing the animation is as simple as:</p>
      </div>
      <div className="code-snippet">
        <div className="text-wrapper">
          <p>{`var animation = bodymovin.loadAnimation({`}</p>
          <p>{`\u00A0\u00A0container: document.getElementById('lottie'), // Required`}</p>
          <p>{`\u00A0\u00A0path: 'data.json', // Required`}</p>
          <p>{`\u00A0\u00A0renderer: 'svg/canvas/html', // Required`}</p>
          <p>{`\u00A0\u00A0loop: true, // Optional`}</p>
          <p>{`\u00A0\u00A0autoplay: true, // Optional`}</p>
          <p>{`\u00A0\u00A0name: "Hello World", // Name for future reference. Optional.`}</p>
          <p>{`})`}</p>
          <p className="bash-p">javascript</p>
        </div>
      </div>
      <div className="para">
        <h3>HTML player installation</h3>
        <h4>Static URL</h4>
        <p>
          Or you can use the script file from here:
          <a href="https://cdnjs.com/libraries/lottie-web">
            https://cdnjs.com/libraries/lottie-web
          </a>
        </p>
        <h4>From Extension</h4>
        <p>
          The extension includes <span>lottie_light.js</span> which will play
          animations exported as svgs.
        </p>
      </div>
      <div className="para">
        <h4>NPM</h4>
      </div>
      <div className="bash">
        <div className="bash-wrapper">
          <p>npm install lottie-web</p>
          <p className="bash-p">bash</p>
        </div>
      </div>
      <div className="para">
        <h4>Bower</h4>
      </div>
      <div className="bash">
        <div className="bash-wrapper">
          <p>bower install lottie-web</p>
          <p className="bash-p">bash</p>
        </div>
      </div>
      <div className="para">
        <p className="italic">
          For more info please visit{" "}
          <a href="https://airbnb.io/lottie/#/web?id=from-extension"> here</a>
        </p>
      </div>
    </div>
  );
}
export default Instruction;
