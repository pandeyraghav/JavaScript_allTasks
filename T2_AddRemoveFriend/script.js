var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click", function(){
    if(flag === 0){
        btn.textContent = "Friends";
        flag = 1
    }
    else{
        btn.textContent = "Remove Friends";
        flag = 0
    }
    
})