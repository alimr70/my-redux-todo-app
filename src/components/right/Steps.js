import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Steps = ({ parentTaskId, steps }) => {
  const dispatch = useDispatch();
  return steps.map((step) => {
    return (
      <div key={step.id} className="task-item-body task-detail-title step">
        <div
          className="task-item-checkbox"
          onClick={() => {
            dispatch(actions.checkStep(parentTaskId, step.id, !step.isChecked));
          }}>
          <span className="checkbox">
            <i
              className={
                step.isChecked
                  ? "icon icon-checkbox-checked"
                  : "icon icon-checkbox-empty"
              }></i>
          </span>
        </div>
        <button className="btn task-item-title">
          <span>{step.title}</span>
        </button>
      </div>
    );
  });
};

export default Steps;
