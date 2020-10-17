import React from "react";
const AddList = () => {
  return (
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
  );
};

export default AddList;
