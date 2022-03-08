import React from "react";
import { Avatar, Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import "../styles/WarbleBox.css";

export const WarbleBox = () => {
  return (
    <div className="warblebox">
      <form>
        <div className="warblebox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1446816599072256000/7qCh2EZ9_200x200.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          className="warblebox__image"
          placeholder="Enter Image URL (optional)"
        />
        <Button className="warblebox__button">
          Send
          <SendRoundedIcon />
        </Button>
      </form>
    </div>
  );
};
