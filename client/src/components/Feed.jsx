import React from "react";

import "../styles/Feed.css";
import { Post } from "./Post";
import { WarbleBox } from "./WarbleBox";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Warble</h2>
      </div>
      <WarbleBox />
      <Post />
    </div>
  );
};
