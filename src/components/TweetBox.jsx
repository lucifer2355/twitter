import React from "react";
import { Avatar, Button } from "@material-ui/core";

import "../style/tweetBox.css";

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png' />
          <input type='text' placeholder="What's hppening?" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
