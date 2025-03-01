let timer;
let seconds = 0;
let isRunning = false;

// Injecting the required HTML code
document.body.innerHTML = `
  <div class="container text-center mt-5">
    <h1 class="mb-4">Stopwatch</h1>
    <div class="display-3 border rounded p-3" id="display">0</div>
    <div class="mt-4">
      <button id="start" class="btn btn-success mx-2">Start</button>
      <button id="stop" class="btn btn-danger mx-2">Stop</button>
      <button id="reset" class="btn btn-secondary mx-2">Reset</button>
    </div>
  </div>
`;

// Getting the elements after injecting HTML
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Updates the timer display
function updateDisplay() {
  display.innerText = seconds;
}

// Start Timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

// Stop Timer
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

// Reset Timer
function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}

// Adding event listeneres for each button
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize Timer Display
updateDisplay();
