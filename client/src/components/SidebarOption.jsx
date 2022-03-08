import React from "react";
import "../styles/SidebarOption.css";

// capital I because it is a component
export const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebar__option ${active && "sidebar__option__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
