var currentTime = dayjs();
var timerDisplayEl = document.getElementById("timer-display");
var countdownGradEl = document.querySelector("#countdown-graduation");

console.log(currentTime.format("MMM D, YYYY"));

function displayCurrentDate() {
  var formattedDate = currentTime.format("MMM D, YYYY");
  timerDisplayEl.textContent = formattedDate;
  calculateGraduationDate();
}

function calculateGraduationDate() {
  //   console.log("Inside calculate", currentDate);
  var gradDate = dayjs("2023-03-16").format("MMM D, YYYY");
  //   console.log("gradDate", gradDate);
  //   console.log(gradDate.diff(currentDate));
  var daysRemaining = dayjs("2023-03-16").diff(dayjs(), "day");

  countdownGradEl.textContent =
    daysRemaining + " days remaining before J O B U!";
}

displayCurrentDate();
