// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. 
// You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, 
// kosher, lactose free, etc. Include at least 3 options)
var form = document.passengerInfo;
function returnAlert(e){
    e.preventDefault()
    var first = form.firstname.value;
    var last = form.lastname.value
    var age = form.age.value
    var gender = form.gender.value
    var location = form.location.value
    var checkedPassengerInfo = []
    var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    // console.log(checkedBoxes)
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedPassengerInfo.push(checkedBoxes[i].value);
    }  
        

    alert(` First Name: ${first}\n Last Name: ${last}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary: ${checkedPassengerInfo}`);

}
form.addEventListener("submit", returnAlert);
