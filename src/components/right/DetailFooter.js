import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const DetailFooter = ({ currentTaskDate }) => {
  const dispatch = useDispatch();

  return (
    <div className="toolbar-item detail-footer">
      <div className="toolbar-inner">
        <div
          className="toolbar-icon"
          onClick={() => {
            dispatch(actions.openDetailbar(false));
            dispatch(actions.setCurrentTask(null));
          }}>
          <i className="icon icon-arrow"></i>
        </div>
        <div className="toolbar-title">
          <span>Created on {currentTaskDate}</span>
        </div>
        <div className="add-group detail-delete">
          <button className="btn">
            <i className="icon icon-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
