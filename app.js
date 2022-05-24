// selecting elements
let todoBtn = document.querySelector(".todo-btn");
let todoIpnput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter");

// event listner

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filter);

// functions
function addTodo(e) {
  e.preventDefault(); // prevent form from submit

  //create elements to add to page
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoIpnput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // buttons
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="uil uil-check"></i>';
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="uil uil-trash-alt"></i>';
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  todoList.appendChild(todoDiv);

  todoIpnput.value = "";
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList.contains("delete-btn")) {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}

function filter(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "complete":
        if (todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncomplete":
        if (!todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
