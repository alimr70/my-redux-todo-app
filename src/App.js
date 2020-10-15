import React from "react";

function App() {
  return (
    <div className="App">
      {/* Before Splitting into small components */}
      <div className="container container-left">
        <div className="left toolbar">
          <ul>
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
            {/* Devider */}
            <div className="devider"></div>
            {/* End Devider */}

            {/* Groups */}
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
                </li>
              </div>
            </div>
            {/* End Groups */}
          </ul>
        </div>
        {/* Add List */}
        <div className="add-list-and-group">
          <div className="add-list">
            <button className="btn">
              <i className="icon icon-plus"></i>
            </button>
            <input
              type="text"
              name="addList"
              id="addList"
              maxLength="255"
              placeholder="New List"
            />
          </div>
          <div className="add-group">
            <button className="btn">
              <i className="icon icon-group-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container container-center"></div>
      <div className="container container-right"></div>
      {/* End before Splitting into small components */}
    </div>
  );
}

export default App;
