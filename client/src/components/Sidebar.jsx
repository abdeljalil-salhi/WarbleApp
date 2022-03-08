import React from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

import "../styles/Sidebar.css";
import { SidebarOption } from "./SidebarOption";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <StickyNote2Icon className="sidebar__icon" />
      <SidebarOption active Icon={HomeRoundedIcon} text="Home" />
      <SidebarOption Icon={TravelExploreIcon} text="Explore" />
      <SidebarOption Icon={NotificationsActiveIcon} text="Notifications" />
      <SidebarOption Icon={SendRoundedIcon} text="Direct" />
      <SidebarOption Icon={BookmarksRoundedIcon} text="Bookmarks" />
      <SidebarOption Icon={FormatListBulletedRoundedIcon} text="Lists" />
      <SidebarOption Icon={AccountCircleIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__warble" fullWidth>
        Warble
      </Button>
    </div>
  );
};
