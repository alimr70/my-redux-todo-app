import React from "react";
import MenuV2 from "../MenuV2";
import EditListName from "./EditListName";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import ClickeOutSide from "../ClickeOutSide";

const TasksHeader = ({ currentListId, currentListTitle }) => {
  const isEditingList = useSelector((state) => state.currentList.isEditing);
  // const source = useSelector((state) => state.menu.source);
  // const editingList = source === "TASK_HEADER" && isEditingList;

  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const globalListId = useSelector((state) => state.currentList.listId);
  const menuSource = useSelector((state) => state.menu.source);
  return (
    <div className="tasks-toolbar">
      <div className="tasks-toolbar-title">
        {isEditingList ? (
          <EditListName
            listId={currentListId}
            isEditing={isEditingList}
            oldName={currentListTitle}
          />
        ) : (
          ""
        )}
        <button
          onFocus={() => {
            dispatch(actions.menuRename("TASK_HEADER", currentListId));
          }}
          className={
            isEditingList
              ? "btn task-item-title editable-title hide"
              : "btn task-item-title editable-title"
          }>
          <h1 className="list-title">{currentListTitle}</h1>
        </button>
      </div>
      {currentListId === "My Day" ||
      currentListId === "Important" ||
      currentListId === "Planned" ||
      currentListId === "Tasks" ? (
        ""
      ) : (
        <ClickeOutSide>
          <div
            className="tasks-toolbar-options"
            onClick={() => {
              dispatch(
                actions.openMenu(
                  isMenuOpen &&
                    globalListId === currentListId &&
                    menuSource === "TASK_HEADER"
                    ? false
                    : true,
                  "TASK_HEADER",
                  currentListId
                )
              );
            }}>
            <div className="tasks-toolbar-title-item">
              <button className="btn">
                <i className="icon icon-menu"></i>
              </button>
            </div>

            {/* <Menu
            id={currentListId}
            source={"TASK_HEADER"}
            sourceId={currentListId}
          /> */}

            {/* Open menu if menu is opened and currentList is current list */}

            {globalListId === currentListId &&
            menuSource === "TASK_HEADER" &&
            isMenuOpen ? (
              <MenuV2
                source={"TASK_HEADER"}
                sourceId={currentListId}
                taskOrList={" list"}
              />
            ) : (
              ""
            )}
          </div>
        </ClickeOutSide>
      )}
    </div>
  );
};

export default TasksHeader;
