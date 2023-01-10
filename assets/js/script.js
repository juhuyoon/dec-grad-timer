var currentTime = dayjs();
var timerDisplayEl = document.getElementById("timer-display");

console.log(currentTime.format("MMM D, YYYY"));

function displayCurrentDate() {
  var formattedDate = currentTime.format("MMM D, YYYY");
  timerDisplayEl.textContent = formattedDate;
}

displayCurrentDate();
