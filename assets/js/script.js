var currentTime = dayjs();
var timerDisplayEl = document.getElementById("timer-display");
var countdownGradEl = document.querySelector("#countdown-graduation");
var noteBtn = document.querySelector("#note-btn");
var noteDisplayEl = document.getElementById("note-display");

console.log(currentTime.format("MMM D, YYYY"));

// This function will call ALL the functions that should execute WHEN the program starts.
function init() {
  displayCurrentDate();
  displayExistingNotes();
}

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

function displayExistingNotes() {
  var returningData = JSON.parse(localStorage.getItem("studentNotes"));
  console.log(returningData);
}

function writeNotes(event) {
  event.preventDefault();
  //   console.log(event);
  var notesText = document.getElementById("notesText").value.trim();
  //   textContent seems to OVERRIDE existing text
  //   noteDisplayEl.textContent = notesText;

  // OPTIMIZATIONS/GOOD PRACTICES
  if (!notesText) {
    alert("TYPE SOMETHING INTO THE BOX OR ELSE PERISH!");
    return;
  }
  putInLocalStorage(notesText);

  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "text-success");
  cardDiv.textContent = notesText;
  noteDisplayEl.appendChild(cardDiv);
}

function putInLocalStorage(notes) {
  console.log("inlocalstoragefunction", notes);
  var storageArray = [];
  if (notes) {
    // TODO: Right now, it seems to DELETE the old array data and create a NEW array. So I should FIX THAT
    storageArray.push(notes);
    localStorage.setItem("studentNotes", JSON.stringify(storageArray));
  }
}

noteBtn.addEventListener("click", writeNotes);

// Call this function to make certain functions run on page-load
init();
