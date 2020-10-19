import DummyData from "../DummyData";

const isToday = (inputDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  if (today === new Date(inputDate).setHours(0, 0, 0, 0)) {
    return true;
  } else {
    return false;
  }
};

const dueDate = (inputDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let futur = new Date(inputDate).setHours(0, 0, 0, 0);
  if (today < futur) {
    return true;
  } else {
    return false;
  }
};

const tasks = DummyData.Tasks;
let myDayCounter = 0;
let importantCounter = 0;
let dueDateCounter = 0;
let tasksListCounter = 0;
tasks.forEach((obj) => {
  console.log(obj);
  console.log(obj.parentList);
  if (isToday(obj.addedToMyDay) && !obj.isChecked) {
    myDayCounter++;
  } else {
    return;
  }
  if (obj.important && !obj.isChecked) {
    importantCounter++;
  } else {
    return;
  }
  if (dueDate(obj.dueDate) && !obj.isChecked) {
    dueDateCounter++;
  } else {
    return;
  }
  if (obj.parentList === 0 && !obj.isChecked) {
    tasksListCounter++;
  } else {
    return;
  }
});

const counterReducer = (
  state = {
    myDay: myDayCounter,
    important: importantCounter,
    planned: dueDateCounter,
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
