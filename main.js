// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  
  // Output Results
  outputEl.innerHTML = `<img src="${flipcoin()}.png"> <img src="${flipcoin()}.png"> <img src="${flipcoin()}.png">`;


// fliping coins function
function flipcoin(){

    if (Math.random() < 0.5){
        return "heads";
    } else{
        return "tails";
    }
    }
}
