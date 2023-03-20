let start = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let resume = document.getElementById("resumeBtn");
let reset = document.getElementById("resetBtn");
let minutesEl = document.getElementById("minutes")
let secondosEL = document.getElementById("seconds")
let milisecondsEl = document.getElementById("miliseconds")


let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

start.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)
resume.addEventListener("click", resumeTimer)
function startTimer() {
    console.log("button start press")
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 1
            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0

                console.log(seconds);
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0
            }
            minutesEl.innerHTML = formatTimer(minutes)
            secondosEL.innerHTML = formatTimer(seconds)
            milisecondsEl.innerHTML = formatmiliseconds(miliseconds)
        }
    }, 10)
    isPaused = false
    start.style.display = "none"
    pause.style.display = "block"
    resume.style.display= "none"
    console.log(isPaused);
    console.log(miliseconds);
}
function pauseTimer() {
    isPaused = true
    resume.style.display = "block"
    pause.style.display = "none"

}
function resetTimer(){
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    miliseconds =0;
    minutesEl.innerHTML = '00'
    secondosEL.innerHTML = '00'
    milisecondsEl.innerHTML = '000'
    
    start.style.display ="block"
    pause.style.display= "none"
    resume.style.display = "none"
    
}

function resumeTimer(){
    isPaused = false;
    pause.style.display="none"
    start.style.display="block"
    resume.style.display ="none"
}
function formatTimer(time) {
    return time < 10 ? `0${time}` : time;

}
function formatmiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time
}