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
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              isChecked={task.isChecked}
              isImportant={task.Important}
            />
          ) : null;
        });

      case "Important":
        return tasks.map((task) => {
          return task.Important ? (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              isChecked={task.isChecked}
              isImportant={task.Important}
            />
          ) : null;
        });

      case "Planned":
        return tasks.map((task) => {
          return isFutur(task.Planned) ? (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              isChecked={task.isChecked}
              isImportant={task.Important}
            />
          ) : null;
        });

      case "Tasks":
        return tasks.map((task) => {
          return task.parentList === "Tasks" ? (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              isChecked={task.isChecked}
              isImportant={task.Important}
            />
          ) : null;
        });

      default:
        return tasks.map((task) => {
          return task.parentList === currentListId ? (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              isChecked={task.isChecked}
              isImportant={task.Important}
            />
          ) : null;
        });
    }
  };

  return <div className="task-items">{<WhatToShow />}</div>;
};

export default TaskItmes;
