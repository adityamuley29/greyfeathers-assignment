import React from "react";
import Search from "../assets/Icons/search.svg";

const SeachBar = () => {
  return (
    <div className="rightSearchBar">
      <img className="icon" id="searchIcon" src={Search} alt="Icon" />
      <input className="seachTextArea" type={"text"} placeholder="search" />
    </div>
  );
};

export default SeachBar;
