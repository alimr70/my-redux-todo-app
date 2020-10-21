import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { isToday, isFutur } from "../../redux/utilities";

const TaskItmes = () => {
  const tasks = useSelector((state) => state.tasks);
  const currentListId = useSelector((state) => state.currentList.listId);

  const WhatToShow = () => {
    switch (currentListId) {
      case "My Day":
        return tasks.map((task) => {
          return isToday(task.addedToMyDay) ? (
            <TaskItem taskTitle={task.title} />
          ) : null;
        });

      case "Important":
        return tasks.map((task) => {
          return task.Important ? <TaskItem taskTitle={task.title} /> : null;
        });

      case "Planned":
        return tasks.map((task) => {
          return isFutur(task.Planned) ? (
            <TaskItem taskTitle={task.title} />
          ) : null;
        });

      case "Tasks":
        return tasks.map((task) => {
          return task.parentList === "Tasks" ? (
            <TaskItem taskTitle={task.title} />
          ) : null;
        });

      default:
        return tasks.map((task) => {
          return task.parentList === currentListId ? (
            <TaskItem taskTitle={task.title} />
          ) : null;
        });
    }
  };

  return <div className="task-items">{<WhatToShow />}</div>;
};

export default TaskItmes;
