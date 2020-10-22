import React from "react";
import Menu from "../Menu";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const TaskDetail = ({ currentTaskId, currentTaskTitle, isChecked }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  return (
    <div className="task-item-body task-detail-title">
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.checkTask(currentTaskId, !isChecked));
        }}>
        <span className="checkbox">
          <i
            className={
              isChecked
                ? "icon icon-checkbox-checked"
                : "icon icon-checkbox-empty"
            }></i>
        </span>
      </div>
      <button className="btn task-item-title">
        <span>
          <h2>{currentTaskTitle}</h2>
        </span>
      </button>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.openMenu(!isMenuOpen, "TASK_DETAIL"));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        <Menu id={currentTaskId} source={"TASK_DETAIL"} />
      </div>
    </div>
  );
};

export default TaskDetail;
