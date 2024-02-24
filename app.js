let gameSeq = [];
let userSeq = [];
let colors = ["blue", "yellow", "red", "purple"];

let h31 = document.querySelector(".h31");
let h32 = document.querySelector(".h32");
let btn1 = document.querySelector("button");

let level = 0;

let started = false;
btn1.addEventListener("click", function () {
    setTimeout(function () {
        h32.innerHTML = "";
    }, 0)
    if (started == false) {
        started = true;
        levelUp();
    }
})




function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function levelUp() {
    if (started == true) {
        btn1.remove();
    }
    level++;
    userSeq = [];
    h31.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    setTimeout(function () {
        gameFlash(randBtn)
    }, 450);
    gameSeq.push(randColor);
}

let allBtns = document.querySelectorAll(".btn");

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 250);
        }
    }
    else {
        h31.innerHTML = `Game Over! Refresh the page to play again.`;

        if (level > 0) h32.innerHTML = `Score: ${level - 1}`;
        else h32.innerHTML = `Score: ${level}`;
        h32.style.marginTop = "0.5rem";

        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
    }
}