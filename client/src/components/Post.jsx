import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import "../styles/Post.css";
import db from "../firebase";

export const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar }, ref) => {
    const deletePost = () => {
      const confirm = window.confirm("Do you really want to delete this post?");
      if (confirm) {
        db.collection("posts")
          .where("postId", "==", id)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          });
      }
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
          <span className="post__delete" onClick={deletePost}>
            <DeleteRoundedIcon />
            <p>delete</p>
          </span>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header__text">
              <h3>
                {displayName}{" "}
                <span className="post__header__text__special">
                  {verified && (
                    <VerifiedRoundedIcon className="post__header__text__special__badge" />
                  )}{" "}
                  @ {username}
                </span>
              </h3>
            </div>
            <div className="post__header__description">
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt="Post" />}
          <div className="post__footer">
            <FavoriteBorderRoundedIcon />
            <ChatBubbleOutlineRoundedIcon />
            <RepeatRoundedIcon />
            <ShareRoundedIcon />
          </div>
        </div>
      </div>
    );
  }
);
