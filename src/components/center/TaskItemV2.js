import React from "react";
import * as actions from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import MenuV2 from "../MenuV2";
import EditTaskName from "./EditTaskName";
import { isToday, isFutur } from "../../redux/utilities";

const getTaskById = (state, taskId) => {
  return state.tasks.find((task) => task.id === taskId);
};

const TaskItemV2 = ({ taskId }) => {
  const task = useSelector((state) => getTaskById(state, taskId));
  const {
    id,
    title,
    isChecked,
    Important,
    addedToMyDay,
    Planned,
    parentList,
  } = task;
  const currentListId = useSelector((state) => state.currentList.listId);

  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const menuSource = useSelector((state) => state.menu.source);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const isEditingTask = useSelector((state) => state.currentTask.isEditing);
  const source = useSelector((state) => state.menu.source);
  const editingTask =
    currentTaskId === taskId && source === "TASK_ITEM" && isEditingTask;
  const isDetailbarOpen = useSelector((state) => state.detailbar.isOpen);

  return (parentList === currentListId && !isChecked) ||
    (currentListId === "My Day" && isToday(addedToMyDay) && !isChecked) ||
    (currentListId === "Important" && Important && !isChecked) ||
    (currentListId === "Planned" && isFutur(Planned) && !isChecked) ? (
    <div className="task-item-body">
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.checkTask(id, !isChecked));
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
        <EditTaskName taskId={id} isEditing={isEditingTask} oldName={title} />
      ) : (
        ""
      )}
      <button
        className={
          editingTask ? "btn task-item-title hide" : "btn task-item-title"
        }
        onClick={() => {
          currentTaskId === id
            ? dispatch(actions.setCurrentTask(null))
            : dispatch(actions.setCurrentTask(id));
          dispatch(actions.openDetailbar(!isDetailbarOpen));
        }}>
        <span>{title}</span>
      </button>
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.importantTask(id, !Important));
        }}>
        <span className="checkbox">
          <i
            className={
              Important ? "icon icon-star-checked" : "icon icon-star"
            }></i>
        </span>
      </div>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.openMenu(false, null, null));
          dispatch(actions.setCurrentTask(id));
          dispatch(actions.openMenu(!isMenuOpen, "TASK_ITEM", id));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        {/* <Menu id={currentTaskId} source={"TASK_ITEM"} sourceId={taskId} /> */}

        {id === currentTaskId && menuSource === "TASK_ITEM" && isMenuOpen ? (
          <MenuV2 source={"TASK_ITEM"} sourceId={id} taskOrList={" task"} />
        ) : (
          ""
        )}
      </div>
    </div>
  ) : null;
};

const TaskItemCheckedV2 = ({ taskId }) => {
  const task = useSelector((state) => getTaskById(state, taskId));
  const {
    id,
    title,
    isChecked,
    Important,
    addedToMyDay,
    Planned,
    parentList,
  } = task;
  const currentListId = useSelector((state) => state.currentList.listId);

  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const menuSource = useSelector((state) => state.menu.source);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const isEditingTask = useSelector((state) => state.currentTask.isEditing);
  const source = useSelector((state) => state.menu.source);
  const editingTask =
    currentTaskId === taskId && source === "TASK_ITEM" && isEditingTask;
  const isDetailbarOpen = useSelector((state) => state.detailbar.isOpen);

  return (parentList === currentListId && isChecked) ||
    (currentListId === "My Day" && isToday(addedToMyDay) && isChecked) ||
    (currentListId === "Important" && Important && isChecked) ||
    (currentListId === "Planned" && isFutur(Planned) && isChecked) ? (
    <div className="task-item-body">
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.checkTask(id, !isChecked));
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
        <EditTaskName taskId={id} isEditing={isEditingTask} oldName={title} />
      ) : (
        ""
      )}
      <button
        className={
          editingTask ? "btn task-item-title hide" : "btn task-item-title"
        }
        onClick={() => {
          currentTaskId === id
            ? dispatch(actions.setCurrentTask(null))
            : dispatch(actions.setCurrentTask(id));
          dispatch(actions.openDetailbar(!isDetailbarOpen));
        }}>
        <span>{title}</span>
      </button>
      <div
        className="task-item-checkbox"
        onClick={() => {
          dispatch(actions.importantTask(id, !Important));
        }}>
        <span className="checkbox">
          <i
            className={
              Important ? "icon icon-star-checked" : "icon icon-star"
            }></i>
        </span>
      </div>
      <div
        className="tasks-toolbar-options"
        onClick={() => {
          dispatch(actions.openMenu(false, null, null));
          dispatch(actions.setCurrentTask(id));
          dispatch(actions.openMenu(!isMenuOpen, "TASK_ITEM", id));
        }}>
        <div className="tasks-toolbar-title-item">
          <button className="btn">
            <i className="icon icon-arrow"></i>
          </button>
        </div>
        {/* <Menu id={currentTaskId} source={"TASK_ITEM"} sourceId={taskId} /> */}

        {id === currentTaskId && menuSource === "TASK_ITEM" && isMenuOpen ? (
          <MenuV2 source={"TASK_ITEM"} sourceId={id} taskOrList={" task"} />
        ) : (
          ""
        )}
      </div>
    </div>
  ) : null;
};

export { TaskItemV2, TaskItemCheckedV2 };
