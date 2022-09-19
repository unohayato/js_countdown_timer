const timer = document.getElementById("timer");
const text = document.getElementById("text");

let startTime;
let orignTime = 10;
let secondTime;

function startTimer () {
  startTime = new Date();
  let timerId = setInterval(() => {
    timer.innerText = "0" + String(orignTime - getTimerTime());
    if (timer.innerText == "00") {
      timer.innerText = orignTime;
      text.innerText = "Finished";
      clearInterval(timerId);
      return;
    };
  }, 1000);
  timerId;

};


function getTimerTime() {
  secondTime = new Date();
  return Math.floor((secondTime - startTime) / 1000);
};

document.getElementById("button").onclick = function(){
  text.innerText = "Waiting..";
  startTimer();
};