import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

import "../style/sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon />
      <SidebarOptions />
    </div>
  );
}

export default Sidebar;
