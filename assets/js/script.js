var currentTime = dayjs();
var timerDisplayEl = document.getElementById("timer-display");
var countdownGradEl = document.querySelector("#countdown-graduation");
var noteBtn = document.querySelector("#note-btn");
var noteDisplayEl = document.getElementById("note-display");

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

function writeNotes(event) {
  event.preventDefault();
  //   console.log(event);
  var notesText = document.getElementById("notesText").value.trim();
  //   textContent seems to OVERRIDE existing text
  //   noteDisplayEl.textContent = notesText;
  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "text-success");
  cardDiv.textContent = notesText;
  noteDisplayEl.appendChild(cardDiv);
}

noteBtn.addEventListener("click", writeNotes);
