var h2 = document.querySelector("h2");
var btn = document.querySelector("button");
var flag = 0

btn.addEventListener("click", function () {
  if(flag === 0){
    h2.style.color = "orange";
    h2.innerHTML = "Request sending...";

    setTimeout(function () {
      h2.innerHTML = "Friends";
      h2.style.color = "green";
      btn.innerHTML = "Remove Friend";
      flag = 1;
    }, 1000);
  }
  else{
    h2.style.color = "orange";
    h2.innerHTML = "Removing...";

    setTimeout(function () {
      h2.innerHTML = "Stranger";
      h2.style.color = "red";
      btn.innerHTML = "Add Friend";
      flag = 0;
    }, 1000);
  }


});
