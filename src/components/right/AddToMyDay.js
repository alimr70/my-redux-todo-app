import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const AddToMyDay = ({ taskId }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="toolbar-item detailbar-item"
      onClick={() => {
        dispatch(actions.addedToMyDay(taskId, Date.now()));
        dispatch(actions.openDetailbar(false));
        dispatch(actions.setCurrentTask(null));
      }}>
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-sun"></i>
        </div>
        <div className="toolbar-title">
          <span>Add To My Day</span>
        </div>
      </div>
    </div>
  );
};

export default AddToMyDay;
