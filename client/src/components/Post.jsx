import React from "react";
import { Avatar } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

import "../styles/Post.css";

export const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1446816599072256000/7qCh2EZ9_200x200.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header__text">
            <h3>
              Abdel{" "}
              <span>
                <VerifiedRoundedIcon className="post__header__text__badge" />
              </span>
            </h3>
          </div>
          <div className="post__header__description">
            <p>Hello everyone!</p>
          </div>
        </div>
        <img src="https://wallpaperaccess.com/full/1320758.jpg" alt="" />
        <div className="post__footer">
          <FavoriteBorderRoundedIcon />
          <ChatBubbleOutlineRoundedIcon />
          <RepeatRoundedIcon />
          <ShareRoundedIcon />
        </div>
      </div>
    </div>
  );
};
