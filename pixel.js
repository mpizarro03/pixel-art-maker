// <button id="clicker">Boring button</button>
//
// <script>
// // 1. Find and store the element we want to listen to events on.
// var clickerButton = document.getElementById("clicker");
// // 2. Define the function that will respond to the event.
// // callback
// var onButtonClick = function() {
//     clickerButton.textContent = "Oh wow, you clicked me!";
// };
// // 3. Add the event listener for the element and function
// // anonymous "inline"
// clickerButton.addEventListener("click", onButtonClick);
//
// clickerButton.addEventListener("click", function() {
//     clickerButton.textContent = "Oh wow, you clicked me!";
// });
//
document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementsByClassName("canvas")[0]

  for(let i = 0; i < 4; i++) {
    let pixel = document.createElement("div")
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }


})
