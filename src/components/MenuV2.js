import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions/actions";

const MenuV2 = ({ source, sourceId, taskOrList }) => {
  const dispatch = useDispatch();

  // const currentListId = useSelector((state) => state.currentList.listId);
  // const currentTaskId = useSelector((state) => state.currentTask.taskId);
  // const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const menuSource = useSelector((state) => state.menu.source);

  // const idTarget = menuSource === "TASK_HEADER" ? currentListId : currentTaskId;

  // const openOrNot =
  //   source === menuSource && id === idTarget && isMenuOpen ? true : false;

  // const taskOrList = menuSource === "TASK_HEADER" ? " list" : " task";

  return (
    <div className="tasks-toolbar-menu unhide">
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
                <span>Rename{taskOrList}</span>
              </div>
            </div>
          </li>
        </div>
        {/* <div>
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
        </div> */}
        {/* <div>
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
        </div> */}
        <div
          onClick={() => {
            if (menuSource === "TASK_HEADER") {
              dispatch(actions.openDetailbar(false));
              dispatch(actions.setCurrentList("Tasks"));
              dispatch(actions.deleteList(sourceId));
            } else {
              dispatch(actions.openDetailbar(false));
              dispatch(actions.deleteTask(sourceId));
            }
          }}>
          <li className="toolbar-item">
            <div className="toolbar-inner">
              <div className="toolbar-icon">
                <i className="icon icon-ham"></i>
              </div>
              <div className="toolbar-title">
                <span>Delete {taskOrList}</span>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default MenuV2;
