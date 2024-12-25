var btn = document.querySelector("button");
var bulb = document.querySelector(".bulb");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    btn.textContent = "OFF";
    bulb.style.backgroundColor = "orange";
    flag = 1;
  } else {
    btn.textContent = "ON";
    bulb.style.backgroundColor = "gray";
    flag = 0;
  }
});
