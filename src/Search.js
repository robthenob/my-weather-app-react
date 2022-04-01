import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="searchForm">
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              id="search-bar"
              placeholder="Search by city name..."
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <button id="searchButton" type="submit" value="seach">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
