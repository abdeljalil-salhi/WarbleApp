import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "../styles/Widgets.css";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchRoundedIcon className="widgets__search" />
        <input type="text" placeholder="Search a profile" />
      </div>
      <div className="widgets__container">
        <h2>Updates</h2>
        <TwitterTweetEmbed tweetId={"1501321667498360840"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Zoiisan"
          options={{ height: 400 }}
          // theme="dark"
        />
        <TwitterShareButton
          url={"https://myreels-61ee8.web.app/"}
          options={{ text: "MyReels is launched <3", via: "its__abdel" }}
        />
      </div>
    </div>
  );
};
