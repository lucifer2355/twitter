import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import "../style/sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOptions active Icon={HomeIcon} text='Home' />
      <SidebarOptions Icon={SearchIcon} text='Explore' />
      <SidebarOptions Icon={NotificationNoneIcon} text='Notifications' />
      <SidebarOptions Icon={MailOutlineIcon} text='Messages' />
      <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarOptions Icon={ListAltIcon} text='Lists' />
      <SidebarOptions Icon={PermIdentityIcon} text='Profile' />
      <SidebarOptions Icon={MoreHorizIcon} text='More' />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
