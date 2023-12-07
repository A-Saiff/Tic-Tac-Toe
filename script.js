const boxes = document.querySelectorAll(".box");
const winning = document.querySelector(".winning");
const reset = document.querySelector(".reset");
const newBtn = document.querySelector(".new");
const winner = document.querySelector(".winner");

const winningCases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let playX = true;
let i = 0;
let winDeclared = false;

function checkWinner() {
  for (let win of winningCases) {
    let place1 = boxes[win[0]].innerText;
    let place2 = boxes[win[1]].innerText;
    let place3 = boxes[win[2]].innerText;
    if (place1 != "" && place2 != "" && place3 != "") {
      if (place1 == place2 && place2 == place3) {
        winner.innerText = "Congratulation! winner is " + place1;
        winning.classList.remove("hidden");
        winDeclared = true;
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
  i++;
  if (i == 9 && winDeclared == false) {
    winner.innerText = "Draw! Want to play again?";
    winning.classList.remove("hidden");
    winDeclared = true;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playX) {
      box.innerText = "X";
      box.style.color = "red";
      playX = false;
      box.disabled = true;
    } else {
      box.innerText = "O";
      playX = true;
      box.style.color = "green";
      box.disabled = true;
    }
    checkWinner();
  });
});

const again = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  playX = true;
  winning.classList.add("hidden");
  winDeclared = false;
  i = 0;
};

reset.addEventListener("click", again);

newBtn.addEventListener("click", again);
