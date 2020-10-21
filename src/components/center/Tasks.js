import React from "react";
import AddTask from "./AddTask";
import TaskItmes from "./TaskItems";
import TasksHeader from "./TasksHeader";

import { useSelector } from "react-redux";

const Tasks = () => {
  const lists = useSelector((state) => state.lists);
  const currentListId = useSelector((state) => state.currentList.listId);
  const currentList = lists.find((list) => list.id === currentListId);
  const currentListTitle =
    currentList === undefined ? currentListId : currentList.title;

  return (
    <div className="container container-center">
      <div className="center tasks">
        <TasksHeader
          currentListId={currentListId}
          currentListTitle={currentListTitle}
        />
        {/* Task Items */}
        <TaskItmes />
        {/* Add Task */}
        <AddTask />
        {/* End Task Items */}
      </div>
    </div>
  );
};

export default Tasks;
