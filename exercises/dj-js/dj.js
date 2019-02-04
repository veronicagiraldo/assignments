var box = document.getElementsByClassName("box")
document.addEventListener("mousemove", function(event){
    console.dir(event.x, event.y)
})
let box = document.getElementsByClassName("box")[0];
box.addEventListener("ondblclick", function(){
    box.style.backgroundColor = "green"; 
})