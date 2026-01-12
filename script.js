const modal = document.getElementById("timerModal");
const openBtn = document.getElementById("openTimer");
const closeBtn = document.querySelector(".close");

const eggType = document.getElementById("eggType");
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const alarm = document.getElementById("alarm");

let timer = null;
let timeLeft = parseInt(eggType.value);

function updateDisplay(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  timeDisplay.textContent = `${m}:${s}`;
}

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

eggType.onchange = () => {
  timeLeft = parseInt(eggType.value);
  updateDisplay(timeLeft);
};

startBtn.onclick = () => {
  if (timer) return;

  timer = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      alarm.play();
      alert("🥚 masakndog: Telur sudah siap dimakan!");
    }
  }, 1000);
};

resetBtn.onclick = () => {
  clearInterval(timer);
  timer = null;
  timeLeft = parseInt(eggType.value);
  updateDisplay(timeLeft);
};

updateDisplay(timeLeft);
