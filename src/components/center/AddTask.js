import React from "react";
import { v1 as uuid } from "uuid";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.addingTask.title);
  const currentListId = useSelector((state) => state.currentList.listId);
  return (
    <div className="task-item-body add-task-body">
      <div className="add-list add-task">
        <button
          className="btn btn-no-hover"
          onClick={() => {
            dispatch(actions.addTask(uuid(), taskTitle, currentListId));
            dispatch(actions.addingTask(""));
          }}>
          <i className="icon icon-plus"></i>
        </button>
        <input
          className="btn-no-hover"
          type="text"
          name="addTask"
          maxLength="255"
          placeholder="New Task"
          value={taskTitle}
          onChange={(e) => {
            dispatch(actions.addingTask(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default AddTask;
