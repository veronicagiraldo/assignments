// function renderTodos(todos){
//     todos.forEach(function(todo){
//         parent = createParent()
//         var parent = document.createElement("div");
//         parent.className = "todo";
//         var text = document.createTextNode(todo.title);

        
//         parent.appendChild(text);
        
//         var input = document.createElement("input");
//         input.className = "input";
//         input.type = "checkbox";
        
//         input.addEventListener("click", handleChecked);
        
//         parent.appendChild(input);
        
//         if(todo.completed){
//             parent.classList.toggle("strikened");
//             input.checked = true;
//         }

//         document.getElementById("todo-list").appendChild(parent);
//     })
// }

// function handleChecked(e){
//     console.log("here");
//     e.target.parentNode.classList.toggle("strikened");
// }
