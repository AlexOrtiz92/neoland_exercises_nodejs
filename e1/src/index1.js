const div = document.querySelector("#div")
const button = document.querySelector("#button")

function randomColor() {
  return Math.floor(Math.random() * 255) + 1;
}


button.addEventListener("click", () => {

  div.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`

})