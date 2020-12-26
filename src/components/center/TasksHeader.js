import React from "react";
import Menu from "../Menu";
import EditListName from "./EditListName";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const TasksHeader = ({ currentListId, currentListTitle }) => {
  const isEditingList = useSelector((state) => state.currentList.isEditing);
  const source = useSelector((state) => state.menu.source);
  const editingList = source === "TASK_HEADER" && isEditingList;

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div className="tasks-toolbar">
      <div className="tasks-toolbar-title">
        {editingList ? (
          <EditListName
            listId={currentListId}
            isEditing={isEditingList}
            oldName={currentListTitle}
          />
        ) : (
          ""
        )}
        <div
          className={
            editingList
              ? "tasks-toolbar-title-item hide"
              : "tasks-toolbar-title-item"
          }>
          <h1 className="list-title">{currentListTitle}</h1>
        </div>
      </div>
      {currentListId === "My Day" ||
      currentListId === "Important" ||
      currentListId === "Planned" ||
      currentListId === "Tasks" ? (
        ""
      ) : (
        <div
          className="tasks-toolbar-options"
          onClick={() => {
            dispatch(
              actions.openMenu(!isMenuOpen, "TASK_HEADER", currentListId)
            );
          }}>
          <div className="tasks-toolbar-title-item">
            <button className="btn">
              <i className="icon icon-arrow"></i>
            </button>
          </div>

          <Menu
            id={currentListId}
            source={"TASK_HEADER"}
            sourceId={currentListId}
          />
        </div>
      )}
    </div>
  );
};

export default TasksHeader;