import React from "react";
import TaskItem from "./TaskItem";
import TaskItemV3 from "./TaskItemV3";
import { useSelector } from "react-redux";
import { isToday, isFutur } from "../../redux/utilities";
import ClickeOutSide from "../ClickeOutSide";

const TaskItmesV3 = () => {
  const tasks = useSelector((state) => state.tasks);
  const currentListId = useSelector((state) => state.currentList.listId);

  const WhatToShow = () => {
    switch (currentListId) {
      case "My Day":
        let taskIds = [];
        let checkedTaskIds = [];
        tasks.map((task) => {
          return isToday(task.addedToMyDay)
            ? task.isChecked
              ? checkedTaskIds.push(task.id)
              : taskIds.push(task.id)
            : null;
        });
        return (
          <div>
            {taskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
            {checkedTaskIds.length > 0 ? (
              <>
                <br />
                <br />
                <div>Completed Tasks</div>
              </>
            ) : null}
            {checkedTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
          </div>
        );

      case "Important":
        let impTaskIds = [];
        let checkedImpTaskIds = [];
        tasks.map((task) => {
          return task.Important
            ? task.isChecked
              ? checkedImpTaskIds.push(task.id)
              : impTaskIds.push(task.id)
            : null;
        });
        return (
          <div>
            {impTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
            {checkedImpTaskIds.length > 0 ? (
              <>
                <br />
                <br />
                <div>Completed Tasks</div>
              </>
            ) : null}
            {checkedImpTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
          </div>
        );

      case "Planned":
        let planTaskIds = [];
        let checkedPlanTaskIds = [];
        tasks.map((task) => {
          return isFutur(task.Planned)
            ? task.isChecked
              ? checkedPlanTaskIds.push(task.id)
              : planTaskIds.push(task.id)
            : null;
        });
        return (
          <div>
            {planTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
            {checkedPlanTaskIds.length > 0 ? (
              <>
                <br />
                <br />
                <div>Completed Tasks</div>
              </>
            ) : null}
            {checkedPlanTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
          </div>
        );

      case "Tasks":
        let tasksTaskIds = [];
        let checkedTasksTaskIds = [];
        tasks.map((task) => {
          return task.parentList === "Tasks"
            ? task.isChecked
              ? checkedTasksTaskIds.push(task.id)
              : tasksTaskIds.push(task.id)
            : null;
        });
        return (
          <div>
            {tasksTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
            {checkedTasksTaskIds.length > 0 ? (
              <>
                <br />
                <br />
                <div>Completed Tasks</div>
              </>
            ) : null}
            {checkedTasksTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
          </div>
        );

      default:
        let listsTaskIds = [];
        let checkedListsTaskIds = [];
        tasks.map((task) => {
          return task.parentList === currentListId
            ? task.isChecked
              ? checkedListsTaskIds.push(task.id)
              : listsTaskIds.push(task.id)
            : null;
        });
        return (
          <div>
            {listsTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
            {checkedListsTaskIds.length > 0 ? (
              <>
                <br />
                <br />
                <div>Completed Tasks</div>
              </>
            ) : null}
            {checkedListsTaskIds.map((taskId) => (
              <TaskItemV3 key={taskId} taskId={taskId} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="task-items">
      <ClickeOutSide>
        <WhatToShow />
      </ClickeOutSide>
    </div>
  );
};

export default TaskItmesV3;
