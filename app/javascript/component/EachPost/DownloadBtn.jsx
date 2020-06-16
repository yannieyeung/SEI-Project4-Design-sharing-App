import React from "react";
// import { render } from "react-dom";
import Download from "@axetroy/react-download";
import { FaDownload } from "react-icons/fa";

function DownloadBtn(props) {
  const element = document.createElement("div");
  document.body.appendChild(element);

  return (
    <div>
      <Download file="data.json" content={props.code}>
        <button type="button">
          <FaDownload size={17} color={"#e6b8d8"} />
          <span> Download JSON file</span>
        </button>
      </Download>
    </div>
  );
}

export default DownloadBtn;
