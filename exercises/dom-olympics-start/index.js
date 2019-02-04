document.getElementById("header").innerHTML =`<h1 class="header">JavaScript Made This!!</h1>
<h2 class="header"><span class="name">[Veronica]</span>wrote the JavaScript</h2>`;
document.getElementsByClassName("message left")[0].innerHTML = `<div> I am so funny, DUH!</div>`;
document.getElementsByClassName("message right")[0].innerHTML = `<div> oh I didnt know that</div>`;
document.getElementsByClassName("message left")[1].innerHTML = `<div> Yeah look me up</div>`;
document.getElementsByClassName("message right")[1].innerHTML = `<div> hahahaha`;

function clearMes(){
    document.getElementsByClassName("messages")[0].innerHTML = `<div></div>`
}
document.getElementById("clear-button").addEventListener('click', clearMes);

var myTheme = document.getElementsByClassName("message");

function changeBackground (){
   if (document.getElementById("theme-drop-down").value === "theme-two"){
       document.getElementsByClassName("left")[0].style.backgroundColor = "grey";
       document.getElementsByClassName("left")[1].style.backgroundColor = "grey";
       document.getElementsByClassName("right")[0].style.backgroundColor = "red";
       document.getElementsByClassName("right")[1].style.backgroundColor = "red";
   }else{
       document.getElementsByClassName("left")[0].style.backgroundColor = "burlywood";
       document.getElementsByClassName("left")[1].style.backgroundColor = "burlywood";
       document.getElementsByClassName("right")[0].style.backgroundColor = "lightblue";
       document.getElementsByClassName("right")[1].style.backgroundColor = "lightblue";
       }
   }

document.getElementById("theme-drop-down").addEventListener("change", changeBackground);

function newMessage(){
    // var userMessage = document.getElementById("messageInput");
    // create a new div
    var newMessage = document.createElement("div");
    // give it classes
    newMessage.className = "message right";
    // give it text
    newMessage.textContent = document.getElementById("messageInput").value
    console.log(newMessage)
    // append it to the DOM (div.messages)
    document.getElementsByClassName("messages")[0].appendChild(newMessage);
}
document.getElementById("addMessage").addEventListener('click' , newMessage);

