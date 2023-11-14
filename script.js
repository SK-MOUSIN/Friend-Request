var a = document.querySelector("h5")
var b = document.querySelector("button")

var check = 0

b.addEventListener("click", function(){
    if(check == 0){
        a.innerHTML = "Friend"
        a.style.color = "green"
        b.innerHTML = "Remove"
        check = 69
    }else {
        a.innerHTML = "Stranger"
        a.style.color = "red"
        b.innerHTML = "Add Friend"
        check = 0
    }
})