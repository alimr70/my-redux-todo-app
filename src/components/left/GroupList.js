import React from "react";

const GroupList = () => {
  return (
    <div>
      <li className="toolbar-item">
        <div className="toolbar-inner">
          <div className="toolbar-icon">
            <i className="icon icon-ham"></i>
          </div>
          <div className="toolbar-title">
            <span>My todo app</span>
          </div>
          <div className="toolbar-count">1</div>
        </div>
      </li>
    </div>
  );
};

export default GroupList;
