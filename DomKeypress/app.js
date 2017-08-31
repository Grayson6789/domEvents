// First way to do it
let text = document.getElementById('h3text');


function keydownText(e){
  if(e.keyCode == 32){
    text.style.fontSize = "32px";
  }
}

function keyupText(e){
  if(e.keyCode == 32){
    text.style.fontSize = "18px";
  }
}


document.body.addEventListener('keydown', keydownText)
document.body.addEventListener('keyup', keyupText)
