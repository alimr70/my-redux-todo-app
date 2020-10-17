import React from "react";

function App() {
  return (
    <div className="App">
      {/* Before Splitting into small components */}

      {/* -------------------------------------------------------------------------- */
      /*                                    Left                                    */
      /* -------------------------------------------------------------------------- */}

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

      {/* -------------------------------------------------------------------------- */
      /*                                   Center                                   */
      /* -------------------------------------------------------------------------- */}

      <div className="container container-center">
        <div className="center tasks">
          <div className="tasks-toolbar">
            <div className="tasks-toolbar-title">
              <div className="tasks-toolbar-title-item">
                <h1 className="list-title">Tasks</h1>
              </div>
            </div>
            <div className="tasks-toolbar-options">
              <div className="tasks-toolbar-title-item">
                <button className="btn">
                  <i className="icon icon-arrow"></i>
                </button>
              </div>
              {/* Tasks Menu */}
              <div className="tasks-toolbar-manu">
                <ul>
                  <div>
                    <li className="toolbar-item">
                      <div className="toolbar-inner">
                        <div className="toolbar-icon">
                          <i className="icon icon-ham"></i>
                        </div>
                        <div className="toolbar-title">
                          <span>Rename List</span>
                        </div>
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
                          <span>Move list to</span>
                        </div>
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
                          <span>Remove from group</span>
                        </div>
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
                          <span>Delete list</span>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
              {/* End Tasks Menu */}
            </div>
          </div>
          {/* Task Items */}
          <div className="task-items">
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
            {/* One Task Item */}
            <div className="task-item-body">
              <div className="task-item-checkbox">
                <span className="checkbox">
                  <i className="icon icon-checkbox-empty"></i>
                </span>
              </div>
              <button className="btn task-item-title">
                <span>Recreate the todo app with redux and sass</span>
              </button>
              <div className="tasks-toolbar-options">
                <div className="tasks-toolbar-title-item">
                  <button className="btn">
                    <i className="icon icon-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End One Task Item */}
          </div>
          {/* Add Task */}
          <div className="task-item-body add-task-body">
            <div className="add-list add-task">
              <button className="btn btn-no-hover">
                <i className="icon icon-plus"></i>
              </button>
              <input
                className="btn-no-hover"
                type="text"
                name="addTask"
                id="addTask"
                maxLength="255"
                placeholder="New Task"
              />
            </div>
          </div>
          {/* End Task Items */}
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */
      /*                                    Right                                   */
      /* -------------------------------------------------------------------------- */}
      <div className="container container-right">
        {/* One Task Detail */}
        <div className="task-item-body task-detail-title">
          <div className="task-item-checkbox">
            <span className="checkbox">
              <i className="icon icon-checkbox-empty"></i>
            </span>
          </div>
          <button className="btn task-item-title">
            <span>Recreate the todo app with redux and sass</span>
          </button>
          <div className="tasks-toolbar-options">
            <div className="tasks-toolbar-title-item">
              <button className="btn">
                <i className="icon icon-arrow"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End One Task Detail */}
        {/* Add Step */}
        <div className="task-item-body add-task-body add-step-body">
          <div className="add-list add-task">
            <button className="btn btn-no-hover">
              <i className="icon icon-plus"></i>
            </button>
            <input
              className="btn-no-hover"
              type="text"
              name="addTask"
              id="addTask"
              maxLength="255"
              placeholder="New Step"
            />
          </div>
        </div>

        {/* End Add Step */}
        {/* Add to my day */}
        <div className="toolbar-item detailbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-sun"></i>
            </div>
            <div className="toolbar-title">
              <span>Add To My Day</span>
            </div>
          </div>
        </div>
        {/* End Add to my day */}

        {/* Detail Footer */}
        <div className="toolbar-item detail-footer">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-arrow"></i>
            </div>
            <div className="toolbar-title">
              <span>Created on Tue, Oct 13</span>
            </div>
            <div className="add-group detail-delete">
              <button className="btn">
                <i className="icon icon-plus"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End Detail Footer */}
      </div>
      {/* End before Splitting into small components */}
    </div>
  );
}

export default App;
