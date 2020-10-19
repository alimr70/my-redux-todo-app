import React from "react";
import * as listsActions from "../../redux/actions/listsActions";
import { useDispatch } from "react-redux";

const GroupList = ({ listId, listTitle, activeTaskCount }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={listId}
      onClick={() => {
        dispatch(listsActions.setCurrentList(listId));
      }}>
      <li className="toolbar-item">
        <div className="toolbar-inner">
          <div className="toolbar-icon">
            <i className="icon icon-ham"></i>
          </div>
          <div className="toolbar-title">
            <span>{listTitle}</span>
          </div>
          <div className="toolbar-count">
            {activeTaskCount > 0 ? activeTaskCount : ""}
          </div>
        </div>
      </li>
    </div>
  );
};

export default GroupList;
