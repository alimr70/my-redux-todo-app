import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions/actions";

// id={currentTaskId} type={"TASK_ITEM"}
// id={currentTaskId} type={"TASK_DETAIL"}
// id={currentListId} type={"TASK_HEADER"}

const Menu = ({ id, source, sourceId }) => {
  const dispatch = useDispatch();

  const currentListId = useSelector((state) => state.currentList.listId);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const menuSource = useSelector((state) => state.menu.source);
  const idTarget = menuSource === "TASK_HEADER" ? currentListId : currentTaskId;
  const openOrNot =
    source === menuSource && id === idTarget && isMenuOpen ? true : false;

  return (
    <div
      className={
        openOrNot ? "tasks-toolbar-menu unhide" : "tasks-toolbar-menu"
      }>
      <ul>
        <div
          onClick={() => {
            dispatch(actions.menuRename(source, sourceId));
          }}>
          <li className="toolbar-item">
            <div className="toolbar-inner">
              <div className="toolbar-icon">
                <i className="icon icon-ham"></i>
              </div>
              <div className="toolbar-title">
                <span>Rename</span>
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
  );
};

export default Menu;
