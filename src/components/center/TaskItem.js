import React from "react";
import * as actions from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import MenuV2 from "../MenuV2";
import EditTaskName from "./EditTaskName";

const TaskItem = ({ taskId, taskTitle, isChecked, isImportant }) => {
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const menuSource = useSelector((state) => state.menu.source);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const isEditingTask = useSelector((state) => state.currentTask.isEditing);
  const source = useSelector((state) => state.menu.source);
  const editingTask =
    currentTaskId === taskId && source === "TASK_ITEM" && isEditingTask;
  const isDetailbarOpen = useSelector((state) => state.detailbar.isOpen);
  const dispatch = useDispatch();
  return (
    <div className="task-item-body" key={taskId}>
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.checkTask(taskId, !isChecked));
        }}>
        <span className="checkbox">
          <i
            className={
              isChecked
                ? "icon icon-checkbox-checked"
                : "icon icon-checkbox-empty"
            }></i>
        </span>
      </div>
      {editingTask ? (
        <EditTaskName
          taskId={taskId}
          isEditing={isEditingTask}
          oldName={taskTitle}
        />
      ) : (
        ""
      )}
      <button
        className={
          editingTask ? "btn task-item-title hide" : "btn task-item-title"
        }
        onClick={() => {
          currentTaskId === taskId
            ? dispatch(actions.setCurrentTask(null))
            : dispatch(actions.setCurrentTask(taskId));
          dispatch(actions.openDetailbar(!isDetailbarOpen));
        }}>
        <span>{taskTitle}</span>
      </button>
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.importantTask(taskId, !isImportant));
        }}>
        <span className="checkbox">
          <i
            className={
              isImportant ? "icon icon-star-checked" : "icon icon-star"
            }></i>
        </span>
      </div>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.setCurrentTask(taskId));
          dispatch(actions.openMenu(false, null, null));
          dispatch(actions.openMenu(!isMenuOpen, "TASK_ITEM", taskId));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        {/* <Menu id={currentTaskId} source={"TASK_ITEM"} sourceId={taskId} /> */}

        {taskId === currentTaskId &&
        menuSource === "TASK_ITEM" &&
        isMenuOpen ? (
          <MenuV2 source={"TASK_ITEM"} sourceId={taskId} taskOrList={" task"} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TaskItem;
