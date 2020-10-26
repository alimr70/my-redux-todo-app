import React, { useEffect } from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const EditListName = ({ listId, isEditing, oldName }) => {
  const dispatch = useDispatch();
  const listTitle = useSelector((state) => state.currentList.title);

  useEffect(() => {
    dispatch(actions.isEditingList(isEditing));
  });

  return (
    <div className="add-list">
      <button
        className="btn"
        onClick={() => {
          dispatch(actions.editList(listId, listTitle));
          dispatch(actions.editingList(""));
          dispatch(actions.isEditingList(false));
        }}>
        <i className="icon icon-plus"></i>
      </button>
      <input
        type="text"
        name="editList"
        maxLength="255"
        placeholder={oldName}
        value={listTitle}
        onChange={(e) => {
          dispatch(actions.editingList(e.target.value));
        }}
      />
    </div>
  );
};

export default EditListName;
