function newExpense(exp,amount) {
    return `<li>
      <span class="delete">&#128465</span>
      <span class="text">${exp}</span>
      
      <input type="text" style="display: none;"/>
    </li>`
  }

function addExpense() {
const expInput = $("#exp-name");
const todoList = $("#todo-list");

if (todoInput.val().trim() === "") return;

const todoItem = $(todoItemElement(todoInput.val()))

//todo: remove
todoItem.find(".remove").click(function () {
    todoItem.remove()
})}