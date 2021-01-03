import React from "react";
import AddTask from "./AddTask";
import TaskItmes from "./TaskItems";
import TaskItmesV2 from "./TaskItemsV2";
import TasksHeader from "./TasksHeader";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const lists = useSelector((state) => state.lists);
  const currentListId = useSelector((state) => state.currentList.listId);
  const currentList = lists.find((list) => list.id === currentListId);
  const currentListTitle =
    currentList === undefined ? currentListId : currentList.title;
  const screenWidth = useSelector((state) => state.screen.width);
  const isDetailbarOpen = useSelector((state) => state.detailbar.isOpen);
  const isToolbarOpen = useSelector((state) => state.toolbar.isOpen);
  const isBarOpen = isDetailbarOpen || isToolbarOpen;

  const dispatch = useDispatch();
  return (
    <div className="container container-center">
      <button
        className={
          screenWidth < 800 ? "btn overlay-btn" : "btn overlay-btn hide"
        }
        onClick={() => {
          dispatch(actions.openToolbar(!isToolbarOpen));
        }}>
        <i className="icon icon-ham"></i>
      </button>

      <div
        className={
          screenWidth < 1020 && isBarOpen ? "overlay unhide" : "overlay"
        }
        onClick={() => {
          dispatch(actions.openDetailbar(false));
          dispatch(actions.openToolbar(false));
          dispatch(actions.setCurrentTask(null));
        }}></div>

      <div className="center tasks">
        <TasksHeader
          currentListId={currentListId}
          currentListTitle={currentListTitle}
        />
        {/* Task Items */}
        {/* <TaskItmes /> */}
        <TaskItmesV2 />
        {/* Add Task */}
        <AddTask />
        {/* End Task Items */}
      </div>
    </div>
  );
};

export default Tasks;
