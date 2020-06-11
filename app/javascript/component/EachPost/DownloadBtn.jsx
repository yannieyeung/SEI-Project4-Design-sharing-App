import React from "react";
// import { render } from "react-dom";
import Download from "@axetroy/react-download";

function DownloadBtn(props) {
  const element = document.createElement("div");
  document.body.appendChild(element);

  return (
    <div>
      <Download file="data.json" content={props.code}>
        <button type="button">Click and Download JSON file</button>
      </Download>
    </div>
  );
}

export default DownloadBtn;
