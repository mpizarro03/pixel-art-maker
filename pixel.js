
document.addEventListener("DOMContentLoaded", function() {
  //canvas grid
  let canvas = document.getElementsByClassName("canvas")[0]
  for(let i = 0; i < 4; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
  // //click function for pixels on canvas
  // canvas.addEventListener("click", function(event) {
  //   console.log(event.target)
  //   event.target.className = "pixel"
  // })

  let palette = document.getElementsByClassName("palette")[0]
  palette.addEventListener("click", function(event) {
      console.log(event.target)
      let currentColor = event.target.className
      console.log(currentColor)
      canvas.addEventListener("click", function(event){
        event.target.className = currentColor
      })
    })


  });
