import React from "react";
const PremadeLists = () => {
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
            <div className="toolbar-count">1</div>
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
            <div className="toolbar-count">1</div>
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
            <div className="toolbar-count">1</div>
          </div>
        </li>
      </div>
      <div>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-person"></i>
            </div>
            <div className="toolbar-title">
              <span>Assigned to you</span>
            </div>
            <div className="toolbar-count">1</div>
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
            <div className="toolbar-count">1</div>
          </div>
        </li>
      </div>
    </>
  );
};

export default PremadeLists;
