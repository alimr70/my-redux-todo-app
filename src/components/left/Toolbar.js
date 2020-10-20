import React from "react";
import AddList from "./AddList";
import Groups from "./Groups";
import PremadeLists from "./PremadeLists";
import { useSelector } from "react-redux";
import List from "./List";

const Toolbar = () => {
  const lists = useSelector((state) => state.lists);
  const tasks = useSelector((state) => state.tasks);
  const tasksCount = (listId) => {
    let count = tasks.filter(
      (task) => task.parentList === listId && task.isChecked === false
    );
    return count;
  };
  return (
    <div className="container container-left">
      <div className="left toolbar">
        <ul>
          <PremadeLists />
          {/* Devider */}
          <div className="devider"></div>
          {/* End Devider */}
          <Groups />
          {lists.map((list) => {
            return list.group === null ? (
              <List
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
      </div>
      {/* Add List */}
      <AddList />
    </div>
  );
};

export default Toolbar;
