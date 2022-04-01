import React from "react";
import "./SourceCodeLink";

export default function SourceCodeLink() {
  return (
    <div className="SourceCodeLink">
      <p>
        <a
          href="https://github.com/robthenob/my-weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        by Randi Bradley, hosted on
        <a href="https://beamish-mochi-ad01b5.netlify.app/"> Netlify </a>
      </p>
    </div>
  );
}
