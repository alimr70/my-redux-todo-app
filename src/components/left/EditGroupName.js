import React, { useEffect } from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const EditGroupName = ({ groupId, isEditing, oldName }) => {
  const dispatch = useDispatch();
  const groupTitle = useSelector((state) => state.addingGroup.title);

  useEffect(() => {
    dispatch(actions.isEditingGroup(isEditing));
  });

  return (
    <div className="add-list">
      <button
        className="btn"
        onClick={() => {
          dispatch(actions.editGroup(groupId, groupTitle));
          dispatch(actions.addingGroup(""));
        }}>
        <i className="icon icon-plus"></i>
      </button>
      <input
        type="text"
        name="editGroup"
        maxLength="255"
        placeholder={oldName}
        value={groupTitle}
        onChange={(e) => {
          dispatch(actions.addingGroup(e.target.value));
        }}
      />
    </div>
  );
};

export default EditGroupName;
