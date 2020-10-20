import React from "react";
import GroupList from "./GroupList";
import * as actions from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import EditGroupName from "./EditGroupName";

const Group = ({ groupId, groupTitle }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const lists = useSelector((state) => state.lists);
  const currentGroup = useSelector((state) => state.currentGroup.groupId);
  const checkNewGroup = currentGroup === groupId && groupTitle === "New Group";
  const tasksCount = (listId) => {
    let count = tasks.filter(
      (task) => task.parentList === listId && task.isChecked === false
    );
    return count;
  };
  const listsCount = lists.filter((list) => list.group === groupId);

  return (
    <>
      <div
        key={groupId}
        onClick={() => {
          currentGroup === groupId
            ? dispatch(actions.setCurrentGroup(0))
            : dispatch(actions.setCurrentGroup(groupId));
        }}>
        <li className="toolbar-item">
          <div className="toolbar-inner">
            <div className="toolbar-icon">
              <i className="icon icon-group"></i>
            </div>
            <div className="toolbar-title">
              <span>{groupTitle}</span>
            </div>
            {listsCount.length > 0 ? (
              <div className="toolbar-collapse-arrow">
                <i className="icon icon-arrow"></i>
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
      </div>
      {checkNewGroup ? <EditGroupName groupId={groupId} /> : ""}
      <ul
        className={
          currentGroup === groupId ? "group-lists unhide" : "group-lists"
        }>
        {lists.map((list) => {
          return list.group === groupId ? (
            <GroupList
              key={list.id}
              listId={list.id}
              listTitle={list.title}
              activeTaskCount={tasksCount(list.id).length}
            />
          ) : (
            ""
          );
        })}
      </ul>
    </>
  );
};

export default Group;
