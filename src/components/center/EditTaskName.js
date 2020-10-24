import React, { useEffect } from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const EditTaskName = ({ taskId, isEditing, oldName }) => {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.addingTask.title);

  useEffect(() => {
    dispatch(actions.isEditingTask(isEditing));
  });

  return (
    <div className="add-list">
      <button
        className="btn"
        onClick={() => {
          dispatch(actions.editTask(taskId, taskTitle));
          dispatch(actions.addingTask(""));
          dispatch(actions.isEditingTask(false));
        }}>
        <i className="icon icon-plus"></i>
      </button>
      <input
        type="text"
        name="editTask"
        maxLength="255"
        placeholder={oldName}
        value={taskTitle}
        onChange={(e) => {
          dispatch(actions.addingTask(e.target.value));
        }}
      />
    </div>
  );
};

export default EditTaskName;
