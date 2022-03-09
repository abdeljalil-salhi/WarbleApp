import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "../styles/WarbleBox.css";
import db from "../firebase";

export const WarbleBox = () => {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    db.collection("posts").add({
      postId: Math.random() * 99999 + 1,
      displayName: "Abdel",
      username: "abdel",
      verified: true,
      text: text,
      image: imageURL,
      avatar:
        "https://pbs.twimg.com/profile_images/1446816599072256000/7qCh2EZ9_200x200.jpg",
      createdAt: timestamp,
    });

    setText("");
    setImageURL("");
  };

  return (
    <div className="warblebox">
      <form>
        <div className="warblebox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1446816599072256000/7qCh2EZ9_200x200.jpg" />
          <input
            type="text"
            value={text}
            placeholder="What's happening?"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input
          type="text"
          value={imageURL}
          className="warblebox__image"
          placeholder="Enter Image URL (optional)"
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Button type="submit" onClick={sendPost} className="warblebox__button">
          Send
          <SendRoundedIcon />
        </Button>
      </form>
    </div>
  );
};
