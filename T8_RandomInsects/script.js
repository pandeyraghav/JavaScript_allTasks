var body = document.querySelector("body");
var btn = document.querySelector("button");
var images = [
  "https://freepngimg.com/thumb/categories/1286.png",
  "https://www.pngmart.com/files/5/Insect-Transparent-Background.png",
  "https://static.vecteezy.com/system/resources/previews/016/416/049/non_2x/butterfly-insect-illustration-free-png.png",
  "https://freepngimg.com/thumb/fly/3-fly-png-image.png",
];
btn.addEventListener("click", function () {
  const valueX = Math.random() * 96;
  const valueY = Math.random() * 96;
  const rotate = Math.random() * 360;

  var insect = Math.floor(Math.random() * images.length);

  var img = document.createElement("img");
  img.setAttribute("src", images[insect]);
  img.style.height = "70px";
  img.style.position = "absolute";
  img.style.left = valueX + "%";
  img.style.top = valueY + "%";
  img.style.rotate = rotate + "deg";

  body.appendChild(img);
});
