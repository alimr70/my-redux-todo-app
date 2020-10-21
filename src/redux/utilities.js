export const isToday = (inputDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  if (today === new Date(inputDate).setHours(0, 0, 0, 0)) {
    return true;
  } else {
    return false;
  }
};

export const isFutur = (inputDate) => {
  let today = new Date().setHours(0, 0, 0, 0);
  let futur = new Date(inputDate).setHours(0, 0, 0, 0);
  if (today < futur) {
    return true;
  } else {
    return false;
  }
};
