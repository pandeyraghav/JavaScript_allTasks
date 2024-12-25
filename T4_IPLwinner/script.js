var teams = ["CSK", "MI", "KKR", "GT", "SRH", "RR", "LSG", "PBKS", "DC"];

var btn = document.querySelector("button");
var txt = document.querySelector("h1");

btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * teams.length);

  txt.innerHTML = teams[num];
});
