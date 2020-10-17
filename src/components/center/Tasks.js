import React from "react";
import AddTask from "./AddTask";
import TaskItmes from "./TaskItems";
import TasksHeader from "./TasksHeader";

const Tasks = () => {
  return (
    <div className="container container-center">
      <div className="center tasks">
        <TasksHeader />
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
