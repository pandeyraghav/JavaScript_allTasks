var users = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1734205402869-d322431ca4f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Your story",
  },

  {
    dp: "https://images.unsplash.com/photo-1730238103847-89a39888ffe3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1732823130947-ac30acee3e39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "renuka",
  },

  {
    dp: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "nikita_",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1734203007978-dca43cc0f846?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "ishanttt",
  },

  {
    dp: "https://images.unsplash.com/photo-1730238103847-89a39888ffe3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1732823130947-ac30acee3e39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "anshi",
  },

  {
    dp: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "paridhi",
  },
];

var sum = "";

users.forEach(function (user, idx) {
  sum += ` <div class="full-story">
                <div class="story">
                    <img id = ${idx} src= ${user.dp} alt="">
                    
                </div>
                <h4>${user.username}</h4>
             </div>`;
});

var storiya = document.querySelector(".storiya");
storiya.innerHTML = sum;

var grow = 0;
var growth = document.querySelector(".growth");

var full = document.querySelector(".full");
storiya.addEventListener("click", function (dets) {
  full.style.display = "block";
  full.style.backgroundImage = `url(${users[dets.target.id].story})`;

  var growInterval = setInterval(() => {
    grow++;
    // percent.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 20);

  setTimeout(function () {
    clearInterval(growInterval);
    full.style.display = "none";
    full.style.backgroundImage = "none";
    grow = 0;
  }, 2000);
});
