let start  = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let resume = document.getElementById("resumeBtn");
let reset = document.getElementById("resetBtn");

start.addEventListener("click",function(){
    console.log("botao start")
})
pause.addEventListener("click",function() {
    console.log("botao Pause")    
})

resume.addEventListener("click",function(){
    console.log("botao Resume")
})
reset.addEventListener("click",function(){
    console.log("botao Reset")
})