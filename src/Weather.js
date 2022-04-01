import React from "react";
import "./Weather.css";
import CurrentConditions from "./CurrentConditions";
import LastUpdatedDate from "./LastUpdatedDate";
import City from "./City";
import Search from "./Search";
import SourceCodeLink from "./SourceCodeLink";

export default function Weather() {
  return (
    <div class="container">
      <div class="weatherContainer">
        <CurrentConditions />
        <LastUpdatedDate />
        <City />
        <Search />
        <SourceCodeLink />
      </div>
    </div>
  );
}
