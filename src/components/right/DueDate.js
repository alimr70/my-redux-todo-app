import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";

const DueDate = ({ taskId, Planned }) => {
  const dispatch = useDispatch();
  return (
    <div className="detailbar-item input-container">
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-calendar"></i>
        </div>
        {Planned !== null ? (
          <span style={{ color: "lightblue" }}>
            &nbsp; Due Date {new Date(Planned).toLocaleDateString()}
          </span>
        ) : (
          <span>&nbsp; Due Date</span>
        )}
        <input
          type="date"
          className="datepicker-input"
          id="datepicker-input"
          onChange={(e) => {
            return dispatch(actions.dueDate(taskId, e.target.valueAsNumber));
          }}
        />
      </div>
      {Planned !== null ? (
        <button
          className="return-to-null"
          onClick={() => {
            dispatch(actions.dueDate(taskId, null));
          }}>
          <i className="icon icon-plus"></i>
        </button>
      ) : null}
    </div>
  );
};

export default DueDate;
