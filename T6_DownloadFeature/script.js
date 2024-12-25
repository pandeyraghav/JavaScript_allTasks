var growth = document.querySelector(".growth");
var percent = document.querySelector(".percent");
var button = document.querySelector("button");
var num = Math.floor(Math.random() * 100)

var grow = 0;

button.addEventListener("click", () => {
    var growInterval = setInterval(() => {
        grow++
        percent.innerHTML = grow + "%"
        growth.style.width = grow + "%"
    }, num)

    setTimeout(() => {
        clearInterval(growInterval)
        button.innerHTML = "Downloaded";
        button.style.opacity = "0.5";
        button.style.pointerEvents = "none";
    }, num * 100)
});