const timer = document.getElementById("timer")
const stopTime = document.getElementById("stop")
const reset = document.getElementById("reset")
const start = document.getElementById("start")

let seconds = 0
let interval = null
start.addEventListener("click", startTimer)
stopTime.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)
function timmer () {
  seconds++

  let hour = Math.floor(seconds / 3600)
  let min = Math.floor((seconds - hour * 3600) / 60)
  let seconds2 = seconds % 60
  if(min < 10) min = '0' + min
  if(hour < 10) hour = '0' + hour
  
  timer.textContent = `${hour}:${min}:${seconds2}`
}

function startTimer(){
  if(interval){
    return 
  }
  interval = setInterval(() => {
    timmer()
  }, 1000);
}

function stopTimer(){
  clearInterval(interval)
  interval =null
}

function resetTimer() {
  clearInterval(interval)
  interval = null
  seconds = 0
  timer.textContent = "00:00:00"
}