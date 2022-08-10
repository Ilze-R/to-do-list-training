const btn = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const inp = document.querySelector(".inp");
const form = document.querySelector(".form-one");
const tododisplay = document.querySelector(".tododisplay");
//setLocalInput();
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
    console.log(todos);
    addToLocalStorage(todos);
    input.classList.add("hide");
    inp.value = "";
  }
}
function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
}

function renderTodos(todos) {
  const result = document.querySelector(".result");

  const div = document.createElement("div");
  div.setAttribute("class", "todo-list-wrapper");
  result.append(div);
  const ul = document.createElement("ul");
  div.append(ul);
  const li = document.createElement("li");
  ul.append(li);
  var innerhtml = "";
  for (var i = 0; i < todos.length; i++) {
    innerhtml = todos[i].name;
    li.innerHTML = innerhtml;
  }
}
