import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { isToday } from "../../redux/utilities";

const AddToMyDay = ({ taskId, addedToMyDay }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="toolbar-item detailbar-item"
      onClick={() => {
        if (isToday(addedToMyDay)) {
          return;
        } else {
          dispatch(actions.addedToMyDay(taskId, Date.now()));
          dispatch(actions.openDetailbar(false));
          dispatch(actions.setCurrentTask(null));
        }
      }}>
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-sun"></i>
        </div>
        <div className="toolbar-title">
          <span>Add To My Day</span>
        </div>
        {isToday(addedToMyDay) ? (
          <button
            className="return-to-null"
            onClick={() => {
              dispatch(actions.addedToMyDay(taskId, null));
              dispatch(actions.openDetailbar(false));
              dispatch(actions.setCurrentTask(null));
            }}>
            <i className="icon icon-plus"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default AddToMyDay;
