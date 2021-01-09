import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const DetailFooter = ({ currentTaskDate, sourceId }) => {
  const dispatch = useDispatch();

  return (
    <div className="toolbar-item detail-footer">
      <div className="toolbar-inner">
        <div
          className="toolbar-icon add-group"
          onClick={() => {
            dispatch(actions.openDetailbar(false));
            dispatch(actions.setCurrentTask(null));
          }}>
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        <div className="toolbar-title">
          <span>Created on {currentTaskDate}</span>
        </div>
        <div
          className="add-group detail-delete"
          onClick={() => {
            dispatch(actions.openDetailbar(false));
            dispatch(actions.deleteTask(sourceId));
            dispatch(actions.setCurrentTask(null));
          }}>
          <button className="btn">
            <i className="icon icon-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
