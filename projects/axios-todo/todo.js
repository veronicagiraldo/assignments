axios.get('https://api.vschool.io/veronica/todo').then(function(response){
   renderTodos(response.data)
    })

function renderTodos(todos){
    todos.forEach(function(todo){
        var parent = document.createElement("div");

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "delete task"
        deleteButton.addEventListener("click", deleteTodo);
       

        parent.className = "todo";

        parent.id = todo._id;

        var text = document.createTextNode(todo.title);

        parent.appendChild(text);
        
        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";

        var image = document.createElement("img");
        image.className = "image"
        image.src = todo.imgUrl

        parent.appendChild(image)
        parent.appendChild(input);
        parent.appendChild(deleteButton)

        input.addEventListener("click", handleChecked);

        if(todo.completed){
            parent.classList.toggle("strikened");
            input.checked = true;
        }

        document.getElementById("todo-list").appendChild(parent)
    })
    
}

function handleChecked(e){
    e.target.parentElement.classList.toggle("strikened");
    // console.log(e.target.parentElement.classList)

    if(e.target.parentElement.classList.value.includes("strikened")){
        axios.put(`https://api.vschool.io/veronica/todo/${e.target.parentElement.id}`, {completed: true}).then(function(response){
            console.log(response.data);
        })
    }else{
        axios.put(`https://api.vschool.io/veronica/todo/${e.target.parentElement.id}`, {completed: false}).then(function(response){
            console.log(response.data);
    
        })
    }

}


document.form.addEventListener('submit', function(e){
    e.preventDefault();

    var newTodo = {
        title: document.form.title.value,
        description: document.form.description.value,
        price: document.form.price.value,
        imgUrl: document.form.image.value
    } 

    axios.post('https://api.vschool.io/veronica/todo', newTodo).then(function(response){
        console.log(response.data);
        renderTodos([response.data]);
    })
})
var deleteTodo = function(e){
    axios.delete(`https://api.vschool.io/veronica/todo/${e.target.parentElement.id}`).then(function(response){
        console.log(response.data);
        e.target.parentElement.remove()
    }).catch(function(error){
        console.log(error)
    });

}
    
        
    