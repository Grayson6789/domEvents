// First way to do it
let domh3 = document.getElementById('hello');

domh3.addEventListener("click", function(){
  domh3.style.color = "red";
})

// Second way to do it
function changeMe(item){
  item.style.color = "blue";
}


// Third way to do it
let domh5 = document.getElementsByTagName('h5')[0];
domh5.onclick = function(){
  domh5.style.color = "green"
}
