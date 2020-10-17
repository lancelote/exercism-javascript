const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const getFirstDay = (year, month, descriptor, weekday) => {
  let daysInMonth = getDaysInMonth(year, month);
}

const getDay = (year, month, descriptor, weekday) => {
  let day = 1;

  if (descriptor === "first") {
    day = getFirstDay(year, month, descriptor, weekday);
  } else if (descriptor === "second") {
    day = getSecondDay(year, month, descriptor, weekday);
  } else if (descriptor === "third") {
    day = getThirdDay(year, month, descriptor, weekday);
  } else if (descriptor === "fourth") {
    day = getFourthDay(year, month, descriptor, weekday);
  } else if (descriptor === "fifth") {
    day = getFifthDay(year, month, descriptor, weekday);
  } else if (descriptor === "last") {
    day = getLastDay(year, month, descriptor, weekday);
  } else if (descriptor === "teenth") {
    day = getTeenthDat(year, month, descriptor, weekday);
  } else {
    throw new Error(`unknown descriptor ${descriptor}`)
  }

  return day;
}

export const meetup = (year, month, descriptor, weekday) =>  {
  let day = getDay(year, month, descriptor, weekday);
  return new Date(year, month - 1, day);
}
