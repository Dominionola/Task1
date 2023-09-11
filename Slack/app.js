let currentDayofTheWeek = document.querySelector(
  '[data-testid="currentDayofTheWeek"]'
);
let currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

let day = new Date();
let dayOfWeek = day.getDay();
let currentUTCDate = new Date().toUTCString();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDayofTheWeek.innerHTML = daysOfWeek[dayOfWeek];

const timeParts = currentUTCDate.split(" ")[4].split(":");
const formattedTime = `${timeParts[0]}:${timeParts[1]}:${timeParts[2]}`;

currentUTCTime.innerHTML = formattedTime;
