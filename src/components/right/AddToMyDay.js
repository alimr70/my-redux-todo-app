import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { isToday } from "../../redux/utilities";

const AddToMyDay = ({ taskId, addedToMyDay }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="detailbar-item"
      onClick={() => {
        if (isToday(addedToMyDay)) {
          return;
        } else {
          dispatch(actions.addedToMyDay(taskId, Date.now()));
        }
      }}>
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-sun"></i>
        </div>
        <div className="toolbar-title">
          {isToday(addedToMyDay) ? (
            <span style={{ color: "lightblue" }}>Added To My Day</span>
          ) : (
            <span>Add To My Day</span>
          )}
        </div>
      </div>
      {isToday(addedToMyDay) ? (
        <button
          className="return-to-null"
          onClick={() => {
            dispatch(actions.addedToMyDay(taskId, null));
          }}>
          <i className="icon icon-plus"></i>
        </button>
      ) : null}
    </div>
  );
};

export default AddToMyDay;
