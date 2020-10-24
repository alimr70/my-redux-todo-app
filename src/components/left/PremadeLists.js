import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { isToday, isFutur } from "../../redux/utilities";

const PremadeLists = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.tasks);
  let myDay = 0;
  let important = 0;
  let planned = 0;
  let tasksList = 0;

  tasks.forEach((obj) => {
    if (isToday(obj.addedToMyDay) && !obj.isChecked) {
      myDay++;
    }
    if (obj.Important && !obj.isChecked) {
      important++;
    }
    if (isFutur(obj.Planned) && !obj.isChecked) {
      planned++;
    }
    if (obj.parentList === "Tasks" && !obj.isChecked) {
      tasksList++;
    }
  });

  return (
    <>
      <div
        onClick={() => {
          dispatch(actions.setCurrentList("My Day"));
        }}>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-sun"></i>
            </div>
            <div className="toolbar-title">
              <span>My Day</span>
            </div>
            <div className="toolbar-count">{myDay > 0 ? myDay : ""}</div>
          </div>
        </li>
      </div>
      <div
        onClick={() => {
          dispatch(actions.setCurrentList("Important"));
        }}>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-star"></i>
            </div>
            <div className="toolbar-title">
              <span>Important</span>
            </div>
            <div className="toolbar-count">
              {important > 0 ? important : ""}
            </div>
          </div>
        </li>
      </div>
      <div
        onClick={() => {
          dispatch(actions.setCurrentList("Planned"));
        }}>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-calendar"></i>
            </div>
            <div className="toolbar-title">
              <span>Planned</span>
            </div>
            <div className="toolbar-count">{planned > 0 ? planned : ""}</div>
          </div>
        </li>
      </div>
      <div
        onClick={() => {
          dispatch(actions.setCurrentList("Tasks"));
        }}>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-home"></i>
            </div>
            <div className="toolbar-title">
              <span>Tasks</span>
            </div>
            <div className="toolbar-count">
              {tasksList > 0 ? tasksList : ""}
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default PremadeLists;
