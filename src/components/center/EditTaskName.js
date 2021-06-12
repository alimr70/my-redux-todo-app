import React, { useEffect } from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const EditTaskName = ({ taskId, isEditing, oldName }) => {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.currentTask.title);

  useEffect(() => {
    dispatch(actions.isEditingTask(isEditing));
  });

  return (
    <div
      className="add-list"
      onBlurCapture={() => {
        dispatch(actions.editTask(taskId, taskTitle));
        dispatch(actions.editingTask(""));
        dispatch(actions.isEditingTask(false));
      }}>
      {/* <button
        className="btn"
        onClick={() => {
          dispatch(actions.editTask(taskId, taskTitle));
          dispatch(actions.editingTask(""));
          dispatch(actions.isEditingTask(false));
        }}>
        <i className="icon icon-plus"></i>
      </button> */}
      <input
        autoFocus
        onFocus={() => {
          dispatch(actions.editingTask(oldName));
        }}
        type="text"
        name="editTask"
        maxLength="255"
        // placeholder={oldName}
        value={taskTitle}
        onChange={(e) => {
          dispatch(actions.editingTask(e.target.value));
        }}
      />
    </div>
  );
};

export default EditTaskName;
