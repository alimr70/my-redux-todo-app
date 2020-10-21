import DummyData from "../DummyData";
import { isToday, isFutur } from "../utilities";

const tasks = DummyData.Tasks;
let myDayCounter = 0;
let ImportantCounter = 0;
let PlannedCounter = 0;
let tasksListCounter = 0;
tasks.forEach((obj) => {
  if (isToday(obj.addedToMyDay) && !obj.isChecked) {
    myDayCounter++;
  }
  if (obj.Important && !obj.isChecked) {
    ImportantCounter++;
  }
  if (isFutur(obj.Planned) && !obj.isChecked) {
    PlannedCounter++;
  }
  if (obj.parentList === "Tasks" && !obj.isChecked) {
    tasksListCounter++;
  }
});

const counterReducer = (
  state = {
    myDay: myDayCounter,
    important: ImportantCounter,
    planned: PlannedCounter,
    tasksList: tasksListCounter,
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default counterReducer;
