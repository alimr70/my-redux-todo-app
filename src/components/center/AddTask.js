import React from "react";

const AddTask = () => {
  return (
    <div className="task-item-body add-task-body">
      <div className="add-list add-task">
        <button className="btn btn-no-hover">
          <i className="icon icon-plus"></i>
        </button>
        <input
          className="btn-no-hover"
          type="text"
          name="addTask"
          maxLength="255"
          placeholder="New Task"
        />
      </div>
    </div>
  );
};

export default AddTask;
