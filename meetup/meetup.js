const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const weekdayToNumber = weekday => {
  let day;

  if (weekday === "Monday") {
    day = 0;
  } else if (weekday === "Tuesday") {
    day = 1;
  } else if (weekday === "Wednesday") {
    day = 2;
  } else if (weekday === "Thursday") {
    day = 3;
  } else if (weekday === "Friday") {
    day = 4;
  } else if (weekday === "Saturday") {
    day = 5;
  } else if (weekday === "Sunday") {
    day = 6;
  } else {
    throw new Error(`unknown weekday ${weekday}`);
  }

  return day;
}

const getFirstDay = (year, month, weekday) => {
  let targetWeekday = weekdayToNumber(weekday);
  let firstMonthDate = new Date(year, month, 1);
  let firstMonthDay = firstMonthDate.getDay();

  return (targetWeekday - firstMonthDay + 7) % 7;
  // ToDo: finish implementation
}
// 0 1 2 3 4 5 6 7 8 9
// M T W T S S M T W T S S M T W T S S M T W T S S
//   ^

const getSecondDay = (year, month, weekday) => {}

const getThirdDay = (year, month, weekday) => {}

const getFourthDay = (year, month, weekday) => {}

const getFifthDay = (year, month, weekday) => {}

const getLastDay = (year, month, weekday) => {}

const getTeenthDay = (year, month, weekday) => {}

const getDay = (year, month, descriptor, weekday) => {
  let day = 1;

  if (descriptor === "first") {
    day = getFirstDay(year, month, weekday);
  } else if (descriptor === "second") {
    day = getSecondDay(year, month, weekday);
  } else if (descriptor === "third") {
    day = getThirdDay(year, month, weekday);
  } else if (descriptor === "fourth") {
    day = getFourthDay(year, month, weekday);
  } else if (descriptor === "fifth") {
    day = getFifthDay(year, month, weekday);
  } else if (descriptor === "last") {
    day = getLastDay(year, month, weekday);
  } else if (descriptor === "teenth") {
    day = getTeenthDay(year, month, weekday);
  } else {
    throw new Error(`unknown descriptor ${descriptor}`)
  }

  return day;
}

export const meetup = (year, month, descriptor, weekday) =>  {
  let day = getDay(year, month, descriptor, weekday);
  return new Date(year, month - 1, day);
}
