// console.dir(document.animals.pets)
document.animals.addEventListener("submit" , function(e){
    e.preventDefault();
    console.log(document.animals.select.value)
})