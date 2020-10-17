import React from "react";

const AddStep = () => {
  return (
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
  );
};

export default AddStep;
