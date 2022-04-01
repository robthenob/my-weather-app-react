import React from "react";
import "./LastUpdatedDate.css";

export default function LastUpdatedDate() {
  return (
    <div className="LastUpdatedDate">
      <h2>
        <span id="lastUpdated">Last Updated: </span> <br />
        <span id="currentDate">Wednesday 21:35</span>
      </h2>
    </div>
  );
}
