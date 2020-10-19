import React, { useEffect } from "react";
import { useDispatch as dispatch, useSelector } from "react-redux";

const PremadeLists = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <div>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-sun"></i>
            </div>
            <div className="toolbar-title">
              <span>My Day</span>
            </div>
            <div className="toolbar-count">
              {counter.myDay > 0 ? counter.myDay : ""}
            </div>
          </div>
        </li>
      </div>
      <div>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-star"></i>
            </div>
            <div className="toolbar-title">
              <span>Important</span>
            </div>
            <div className="toolbar-count">
              {counter.important > 0 ? counter.important : ""}
            </div>
          </div>
        </li>
      </div>
      <div>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-calendar"></i>
            </div>
            <div className="toolbar-title">
              <span>Planned</span>
            </div>
            <div className="toolbar-count">
              {counter.planned > 0 ? counter.planned : ""}
            </div>
          </div>
        </li>
      </div>
      <div>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-home"></i>
            </div>
            <div className="toolbar-title">
              <span>Tasks</span>
            </div>
            <div className="toolbar-count">
              {counter.tasksList > 0 ? counter.tasksList : ""}
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default PremadeLists;
