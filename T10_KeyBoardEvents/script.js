let img = document.querySelector("img");
let imgX = 0;
let imgY = 0;

document.addEventListener("keydown", function (dets) {
  if (dets.code == "ArrowRight"  && imgX < 87) {
    imgX++;
    img.style.left = imgX + "%";
  } else if (dets.code == "ArrowLeft" && imgX >= 0) {
    imgX--;
    img.style.left = imgX + "%";
  } else if (dets.code == "ArrowUp"  && imgY >=0) {
    imgY--;
    img.style.top = imgY + "%";
  } else if (dets.code == "ArrowDown" && imgY <70 ) {
    imgY++;
    img.style.top = imgY + "%";
  }
});
