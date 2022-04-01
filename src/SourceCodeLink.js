import React from "react";
import "./SourceCodeLink";

export default function SourceCodeLink() {
  return (
    <div className="SourceCodeLink">
      <p>
        <a
          href="https://github.com/robthenob/Vanilla-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        by Randi Bradley, hosted on
        <a href="https://dreamy-dijkstra-663899.netlify.app/"> Netlify </a>
      </p>
    </div>
  );
}
