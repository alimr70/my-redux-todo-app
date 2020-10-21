import React from "react";
import * as actions from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../Menu";

const TaskItem = ({ taskId, taskTitle }) => {
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const dispatch = useDispatch();
  return (
    <div
      className="task-item-body"
      key={taskId}
      onClick={() => {
        currentTaskId === taskId
          ? dispatch(actions.setCurrentTask(null))
          : dispatch(actions.setCurrentTask(taskId));
      }}>
      <div className="task-item-checkbox">
        <span className="checkbox">
          <i className="icon icon-checkbox-empty"></i>
        </span>
      </div>
      <button className="btn task-item-title">
        <span>{taskTitle}</span>
      </button>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.openMenu(!isMenuOpen, "TASK_ITEM"));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        <Menu id={currentTaskId} source={"TASK_ITEM"} />
      </div>
    </div>
  );
};

export default TaskItem;
