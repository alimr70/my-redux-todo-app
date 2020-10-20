import React from "react";
import { v1 as uuid } from "uuid";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
const AddList = () => {
  const dispatch = useDispatch();
  const listTitle = useSelector((state) => state.addingList.title);

  return (
    <div className="add-list-and-group">
      <div className="add-list">
        <button
          className="btn"
          onClick={() => {
            dispatch(actions.addList(uuid(), listTitle, null));
            dispatch(actions.addingList(""));
          }}>
          <i className="icon icon-plus"></i>
        </button>
        <input
          type="text"
          name="addList"
          id="addList"
          maxLength="255"
          placeholder="New List"
          onChange={(e) => {
            dispatch(actions.addingList(e.target.value));
          }}
        />
      </div>
      <div className="add-group">
        <button
          className="btn"
          onClick={() => {
            dispatch(actions.addGroup(uuid(), "New Group"));
          }}>
          <i className="icon icon-group-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default AddList;
