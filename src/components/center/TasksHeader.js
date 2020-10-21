import React from "react";

const TasksHeader = ({ currentListId, currentListTitle }) => {
  return (
    <div className="tasks-toolbar">
      <div className="tasks-toolbar-title">
        <div className="tasks-toolbar-title-item">
          <h1 className="list-title">{currentListTitle}</h1>
        </div>
      </div>
      <div className="tasks-toolbar-options">
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        {/* Tasks Menu */}
        <div className="tasks-toolbar-manu">
          <ul>
            <div>
              <li className="toolbar-item">
                <div className="toolbar-inner">
                  <div className="toolbar-icon">
                    <i className="icon icon-ham"></i>
                  </div>
                  <div className="toolbar-title">
                    <span>Rename List</span>
                  </div>
                </div>
              </li>
            </div>
            <div>
              <li className="toolbar-item">
                <div className="toolbar-inner">
                  <div className="toolbar-icon">
                    <i className="icon icon-ham"></i>
                  </div>
                  <div className="toolbar-title">
                    <span>Move list to</span>
                  </div>
                </div>
              </li>
            </div>
            <div>
              <li className="toolbar-item">
                <div className="toolbar-inner">
                  <div className="toolbar-icon">
                    <i className="icon icon-ham"></i>
                  </div>
                  <div className="toolbar-title">
                    <span>Remove from group</span>
                  </div>
                </div>
              </li>
            </div>
            <div>
              <li className="toolbar-item">
                <div className="toolbar-inner">
                  <div className="toolbar-icon">
                    <i className="icon icon-ham"></i>
                  </div>
                  <div className="toolbar-title">
                    <span>Delete list</span>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
        {/* End Tasks Menu */}
      </div>
    </div>
  );
};

export default TasksHeader;
