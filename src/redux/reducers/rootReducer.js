import counterReducer from "./counterReducer";
import tasksReducer from "./tasksReducer";
import listsReducer from "./listsReducer";
import groupsReducer from "./groupsReducer";
import {
  currentListIdReducer,
  currentTaskIdReducer,
  currentGroupIdReducer,
} from "./currentReducer";
import {
  addingListReducer,
  addingTaskReducer,
  addingGroupReducer,
} from "./addingReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  lists: listsReducer,
  groups: groupsReducer,
  currentList: currentListIdReducer,
  currentGroup: currentGroupIdReducer,
  currentTask: currentTaskIdReducer,
  addingList: addingListReducer,
  addingGroup: addingGroupReducer,
  addingTask: addingTaskReducer,
});

export default rootReducer;
