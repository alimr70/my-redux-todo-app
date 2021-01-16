import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";

const DueDate = ({ taskId, Planned }) => {
  const dispatch = useDispatch();
  return (
    <div className="toolbar-item detailbar-item input-container">
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-calendar"></i>
        </div>
        <span className="datepicker-toggle-button"> &nbsp; Due Date</span>
        <input
          type="date"
          className="datepicker-input"
          id="datepicker-input"
          onChange={(e) => {
            return dispatch(actions.dueDate(taskId, e.target.valueAsNumber));
          }}
        />
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
    </div>
  );
};

export default DueDate;
