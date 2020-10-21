import React from "react";
import AddStep from "./AddStep";
import AddToMyDay from "./AddToMyDay";
import DetailFooter from "./DetailFooter";
import TaskDetail from "./TaskDetail";
import { useSelector } from "react-redux";

const Detailbar = () => {
  const tasks = useSelector((state) => state.tasks);
  const currentTaskId = useSelector((state) => state.currentTask.taskId);
  const currentTask = tasks.find((task) => task.id === currentTaskId);
  const currentTaskTitle =
    currentTask === undefined ? currentTaskId : currentTask.title;
  const currentTaskDate =
    currentTask === undefined
      ? currentTaskId
      : new Date(currentTask.createdAt).toDateString();
  return (
    <div className="container container-right">
      <TaskDetail
        currentTaskId={currentTaskId}
        currentTaskTitle={currentTaskTitle}
      />
      <AddStep />
      <AddToMyDay />
      <DetailFooter currentTaskDate={currentTaskDate} />
    </div>
  );
};

export default Detailbar;
