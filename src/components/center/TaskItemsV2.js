import React from "react";
import TaskItemV2 from "./TaskItemV2";
import { useSelector } from "react-redux";

const getTaskIds = (state) => state.tasks.map((task) => task.id);

const TaskItmesV2 = () => {
  const taskIds = useSelector(getTaskIds);

  const WhatToShow = taskIds.map((taskId) => {
    return <TaskItemV2 key={taskId} taskId={taskId} />;
  });

  return <div className="task-items">{WhatToShow}</div>;
};

export default TaskItmesV2;
