// First way to do it
let text = document.getElementById('h3text');

function mouseOver() {
  text.innerHTML = "Thank You"
}

function mouseOut() {
  text.innerHTML = "Mouse Over Me"
}


text.addEventListener('mouseover', mouseOver)
text.addEventListener('mouseout', mouseOut)
