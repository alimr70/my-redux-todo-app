import React from "react";
import GroupList from "./GroupList";
import { useSelector } from "react-redux";

const Group = ({ groupId, groupTitle }) => {
  const tasks = useSelector((state) => state.tasks);
  const lists = useSelector((state) => state.lists);
  const tasksCount = (listId, isChecked) => {
    let count = tasks.filter(
      (task) => task.parentList === listId && task.isChecked === true
    );
    return count;
  };
  console.log();
  const listsCount = lists.filter((list) => list.group === groupId);

  return (
    <div key={groupId}>
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
        <ul className="group-lists unhide">
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
      </li>
    </div>
  );
};

export default Group;
