import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const TaskItem = ({ taskId, taskTitle }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="task-item-body"
      key={taskId}
      onClick={() => {
        dispatch(actions.setCurrentTask(taskId));
      }}>
      <div className="task-item-checkbox">
        <span className="checkbox">
          <i className="icon icon-checkbox-empty"></i>
        </span>
      </div>
      <button className="btn task-item-title">
        <span>{taskTitle}</span>
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
