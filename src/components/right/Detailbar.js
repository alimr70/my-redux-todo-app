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

  const currentTaskIsChecked =
    currentTask === undefined ? false : currentTask.isChecked;

  const currentTaskSteps = currentTask === undefined ? [] : currentTask.steps;

  const currentTaskDate =
    currentTask === undefined
      ? currentTaskId
      : new Date(currentTask.createdAt).toDateString();

  const isDetailbarOpen = useSelector((state) => state.detailbar.isOpen);
  const screenWidth = useSelector((state) => state.screen.width);

  return (
    <div
      className={
        screenWidth > 1020 && isDetailbarOpen
          ? "container container-right"
          : screenWidth > 1020 && !isDetailbarOpen
          ? "container container-right hide"
          : screenWidth < 1020 && isDetailbarOpen
          ? "container container-right unshift"
          : "container container-right"
      }>
      <TaskDetail
        currentTaskId={currentTaskId}
        currentTaskTitle={currentTaskTitle}
        isChecked={currentTaskIsChecked}
        currentTaskSteps={currentTaskSteps}
      />
      <AddStep />
      <AddToMyDay />
      <DetailFooter currentTaskDate={currentTaskDate} />
    </div>
  );
};

export default Detailbar;
