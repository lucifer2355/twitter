import React from "react";

import "../style/sidebarOption.css";

const SidebarOptions = ({ text, Icon }) => {
  return (
    <div className='sidebarOption'>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
