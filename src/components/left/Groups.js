import React from "react";
const Groups = () => {
  return (
    <>
      <div className="groups">
        <div>
          <li className="toolbar-item">
            <div className="toolbar-inner">
              <div className="toolbar-icon">
                <i className="icon icon-group"></i>
              </div>
              <div className="toolbar-title">
                <span>Programming</span>
              </div>
              <div className="toolbar-collapse-arrow">
                <i className="icon icon-arrow"></i>
              </div>
            </div>
            <ul className="group-lists">
              <div>
                <li className="toolbar-item">
                  <div className="toolbar-inner">
                    <div className="toolbar-icon">
                      <i className="icon icon-ham"></i>
                    </div>
                    <div className="toolbar-title">
                      <span>My todo app</span>
                    </div>
                    <div className="toolbar-count">1</div>
                  </div>
                </li>
              </div>
              <div>
                <li className="toolbar-item">
                  <div className="toolbar-inner">
                    <div className="toolbar-icon">
                      <i className="icon icon-ham"></i>
                    </div>
                    <div className="toolbar-title">
                      <span>El Nada app</span>
                    </div>
                    <div className="toolbar-count">1</div>
                  </div>
                </li>
              </div>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default Groups;
