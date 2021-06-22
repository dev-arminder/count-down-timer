const currentTime = Date.parse(new Date());
const timeInMinutes = 8 * 60; // For 8 hours timeinterval
const deadLine = new Date(currentTime + timeInMinutes * 60 * 1000);
const daysSpan = document.querySelector(".days .number");
const hoursSpan = document.querySelector(".hours .number");
const minutesSpan = document.querySelector(".minutes .number");
const secondsSpan = document.querySelector(".seconds .number");

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function updateClock() {
  const t = getTimeRemaining(deadLine);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = t.hours;
  minutesSpan.innerHTML = t.minutes;
  secondsSpan.innerHTML = t.seconds;
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

updateClock();
let timeinterval = setInterval(updateClock, 1000);
