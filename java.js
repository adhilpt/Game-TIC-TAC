let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset"); 
let hide=document.querySelector(".hide"); 
let msgHide=document.querySelector("#msghide");

let player0=true;  //player0 , playerX
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
    

    boxes.forEach((box) => {
        box.addEventListener("click",() =>{
            console.log("box was clicked");
            if(player0){
            box.innerText = "O";
            player0=false;
            }
            else{
                box.innerText = "X"; 
                player0=true;
            }
            box.disabled=true;
            checkWinner();
        });
    }); 
    const disableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;  // Disables the box, preventing further clicks
        });
    };

    
    function showWinner(winner) {
    msgHide.innerText = "WINNER IS " + winner;
    hide.classList.remove("hide");
    console.log("WINNER IS " + winner);
    disableBoxes();
    let confettiSettings = { target: 'my-canvas' };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

    const checkWinner=()=>{
        for (const condition of winCondition) {
            let pos1Val = boxes[condition[0]].innerText;
            let pos2Val = boxes[condition[1]].innerText;
            let pos3Val = boxes[condition[2]].innerText;

            if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
                if(pos1Val===pos2Val && pos2Val===pos3Val)
                    showWinner(pos1Val);
            }
        }
    }

    resetBtn.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        player0 = true;
        hide.classList.add("hide"); // Hide the winner message
    });
