let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector("#winner");

let turnO = true;
const paterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style = "color:#ffee00";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style = "color:#FFE5CF";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled=false;
    }
}
const checkWinner = () => {
  for (let patern of paterns) {
    // console.log(patern[0], patern[1], patern[2]);
    // console.log(
    //   boxes[patern[0]].innerText,
    //   boxes[patern[1]].innerText,
    //   boxes[patern[2]].innerText,
    // );
    let pos1 = boxes[patern[0]].innerText;
    let pos2 = boxes[patern[1]].innerText;
    let pos3 = boxes[patern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1 == pos2 && pos2 == pos3){
            console.log("winner is ",pos1);
            msg.innerHTML = `Player ${pos1} win the Game !!!`;
            msg.style.display = "flex";
            disableBoxes();
        }
    }

  }
};
reset.addEventListener("click", ()=>{
    enableBoxes();
    turnO = true;
    msg.style.display = "none";
})