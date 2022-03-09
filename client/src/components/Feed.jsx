import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";

import "../styles/Feed.css";
import db from "../firebase";
import { Post } from "./Post";
import { WarbleBox } from "./WarbleBox";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
        return () => null;
      });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Warble</h2>
      </div>
      <WarbleBox />
      <FlipMove>
        {posts.map(
          ({ postId, displayName, username, verified, text, image, avatar }) => (
            <Post
              key={Math.random()}
              id={postId}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              image={image}
              avatar={avatar}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};
