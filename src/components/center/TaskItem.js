import React from "react";

const TaskItem = () => {
  return (
    <div className="task-item-body">
      <div className="task-item-checkbox">
        <span className="checkbox">
          <i className="icon icon-checkbox-empty"></i>
        </span>
      </div>
      <button className="btn task-item-title">
        <span>Recreate the todo app with redux and sass</span>
      </button>
      <div className="tasks-toolbar-options">
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
