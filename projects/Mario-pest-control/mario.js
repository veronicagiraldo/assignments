
var form = document.totalcoins

function totalSum(e){
    e.preventDefault();
    var goom = form.goombas
    var bobo = form.bobombs
    var cheep = form.cheepcheeps
    var total = document.getElementById("result")
    total.textContent = parseInt(goom.value)*5 + parseInt(bobo.value)*7 + parseInt(cheep.value)*11

    goom.value = " "
    bobo.value = " "
    cheep.value = " "

}
form.addEventListener("submit", totalSum);

