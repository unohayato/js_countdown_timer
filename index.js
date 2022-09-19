const timer = document.getElementById("timer");

let startTime;
let orignTime = 10;
let secondTime;

function startTimer () {
  startTime = new Date();
  setInterval(() => {
    timer.innerText = orignTime - getTimerTime();
    if (timer.innerText <= 0) {
      
    }
  }, 1000);
  
};


function getTimerTime() {
  secondTime = new Date();
  return Math.floor((secondTime - startTime) / 1000);
};

startTimer();