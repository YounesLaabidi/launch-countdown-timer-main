const timeUnit = {
  days: document.querySelector(".unit-d"),
  hours: document.querySelector(".unit-h"),
  minutes: document.querySelector(".unit-m"),
  seconds: document.querySelector(".unit-s"),
};
const showRemainingTime = (currentTime) => {
  timeUnit.days.innerText = currentTime.days;
  timeUnit.hours.innerText = currentTime.hours;
  timeUnit.minutes.innerText = currentTime.minutes;
  timeUnit.seconds.innerText = currentTime.seconds;
};
let day = String(new Date().getMonth() + 2);
if (day.length === 1) {
  day = "0" + day;
}
console.log(day);
const launchTimeMilliseconds = new Date(`2023-${day}-02T10:45:21`).getTime();
function countdown() {
  const currentDateMilliseconds = new Date().getTime();
  const remainingTimeMilliseconds =
    launchTimeMilliseconds - currentDateMilliseconds;
  const currentTime = {
    days: Math.floor(remainingTimeMilliseconds / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (remainingTimeMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor(
      (remainingTimeMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    ),
    seconds: Math.floor((remainingTimeMilliseconds % (1000 * 60)) / 1000),
  };
  showRemainingTime(currentTime);
}
countdown();
setInterval(() => {
  countdown();
}, 1000);
