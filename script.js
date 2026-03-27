const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const boxes = document.getElementsByClassName("box");
const startBtn = document.getElementById("start-btn");

let score;
let timeLeft;
let activeBox = null;
let isGameRunning = false;

function startGame(){
    score = 0;
    timeLeft = 30;
    scoreDisplay.innerText = score;
    timeDisplay.innerText = timeLeft;
    startBtn.disabled = true;
    isGameRunning = true;

    const timeIntervalId = setInterval(function(){
        timeLeft--;
        timeDisplay.innerText = timeLeft;
        if (timeLeft === 0){
            clearInterval(timeIntervalId);
        };
    },1000);

    const GameIntervalId = setInterval(function(){
        for (let box of boxes){
            box.classList.remove("active");
        };

        activeBox = boxes[Math.floor(Math.random() * boxes.length)];
        activeBox.classList.add("active");
        setTimeout(function(){
            if (activeBox){
                activeBox.classList.remove("active");
                activeBox = null;
            }
        },1000);
    },2000);

    setTimeout(function(){
        clearInterval(GameIntervalId);
        clearInterval(timeIntervalId);

        for(let box of boxes){
            box.classList.remove("active");
        };

        activeBox = null;

        alert(`Game Over: Your Final Score is ${score}`);

        startBtn.disabled = false;
        isGameRunning = false;
    },30000);
};

for(let box of boxes){
            box.addEventListener("click",function(){
                if (!isGameRunning){
                    return;
                };
                if (this === activeBox){
                    score ++ ;
                    scoreDisplay.innerText = score;
                    this.classList.remove("active");
                    activeBox = null;
                };
            });
        };

startBtn.addEventListener("click",startGame);