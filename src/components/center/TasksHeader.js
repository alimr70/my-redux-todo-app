import React from "react";
import Menu from "../Menu";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const TasksHeader = ({ currentListId, currentListTitle }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div className="tasks-toolbar">
      <div className="tasks-toolbar-title">
        <div className="tasks-toolbar-title-item">
          <h1 className="list-title">{currentListTitle}</h1>
        </div>
      </div>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.openMenu(!isMenuOpen, "TASK_HEADER"));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        <Menu id={currentListId} source={"TASK_HEADER"} />
      </div>
    </div>
  );
};

export default TasksHeader;
