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
  var list = document.createElement("div");
  todos.forEach(function (todo) {
    p = document.createElement("p");
    p.classList.add("item");
    tododisplay.append(p);
    tododisplay.classList.remove("hide");
    p.innerHTML = todos.value;
  });
}
