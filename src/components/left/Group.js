import React from "react";
import GroupList from "./GroupList";

const Group = () => {
  return (
    <div>
      <li className="toolbar-item">
        <div className="toolbar-inner">
          <div className="toolbar-icon">
            <i className="icon icon-group"></i>
          </div>
          <div className="toolbar-title">
            <span>Programming</span>
          </div>
          <div className="toolbar-collapse-arrow">
            <i className="icon icon-arrow"></i>
          </div>
        </div>
        <ul className="group-lists">
          <GroupList />
          <GroupList />
          <GroupList />
        </ul>
      </li>
    </div>
  );
};

export default Group;
