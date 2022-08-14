const btn = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const inp = document.querySelector(".inp");
const form = document.querySelector(".form-one");
const tododisplay = document.querySelector(".tododisplay");

const todos = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  input.classList.remove("hide");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(inp.value);
  localStorage.setItem("todo", JSON.stringify(todos));
});

function addTodo(item) {
  if (item !== " ") {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };

    todos.push(todo);
    //array
    console.log(todos);
    //object
    console.log(todo);
    addToStorage(todos, todo);
    input.classList.add("hide");
    inp.value = "";
  }
}

function renderTodos(todos, todo) {
  const result = document.querySelector(".result");
  const div = document.createElement("div");

  div.setAttribute("class", "todo-list-wrapper");
  result.append(div);
  const ul = document.createElement("ul");
  ul.setAttribute("class", "todo-list");
  ul.innerHTML = "";
  div.append(ul);

  //todos.forEach(function (item) {});
  const checked = todo.completed ? "checked" : null;
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.setAttribute("data-key", todo.id);
  if (todo.completed === true) {
    li.classList.add("checked");
  }

  var innerhtml = "";

  for (var i = 0; i < todos.length; i++) {
    //innerhtml = todos[i].name;
    //li.innerHTML = innerhtml;
    li.innerHTML = `
      <input  type="checkbox" class="checkbox" ${checked}>
      <p contentEditable="true"> ${todos[i].name}</p>
      
      <button class="delete">x</button>
    `;
    ul.append(li);
  }
}

function addToStorage(todos, todo) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, todo);
}

const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
    //let li = event.target.parentElement;
    //let index = Array.prototype.indexOf.call(itemsList.children, li);
    //deleteTodo(index);
    //itemsList.remmoveChild(li);
  }
});

function deleteTodo(id) {
  //let list = JSON.parse(localStorage.getItem("todo"));
  //list.splice(index, 1);
  //localStorage.setItem("todo", JSON.stringify(list));
  todos = todos.filter(function (item) {
    return item.id != id;
  });
  addToStorage(todos);
}

/*function changeText(element) {
  document.getElementsByClassName(".checkbox").innerHTML = element.value;
}*/
