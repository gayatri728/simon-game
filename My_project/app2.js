let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// START GAME
document.addEventListener("keydown", function(){
    if (!started) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

// GAME FLASH (for sequence)
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

// USER FLASH (when user clicks)
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}

// LEVEL UP FUNCTION
function levelUp() {
    userSeq = [];   // reset user input each level
    level++;
    h2.innerText = `Level ${level}`;
    
    let randomIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randomIdx];

    gameSeq.push(randColor);

    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);

    console.log("Game Sequence:", gameSeq);
}

// BUTTON PRESS HANDLER
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.classList[1]; // get color class
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// CHECK ANSWER
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Game Over! Your score was ${level}. Press any key to restart`;
        document.querySelector("body").style.backgroundColour = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

// ADD EVENT LISTENER TO BUTTONS
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// RESET GAME
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}