const canvas = document.getElementById("jscanvas");


function onMouseMove(event) {
    console.log(event);
}

if (canvas){
  canvas.addEventListener("mousemove", on, onMouseMove);
}