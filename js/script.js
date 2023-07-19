function newExpense(exp,amount) {
    return `<li>
      <span class="delete">&#128465</span>
      <span class="text">${exp}</span>
      <span class="text">${amount}</span>
      <input type="text" style="display: none;"/>
    </li>`
  }

function addExpense() {
    const exp_name = $("#exp-name");
    const exp_amount =$("#exp-amount")
    const exp_list = $("#exp-list");

    if (exp_name.val().trim() === "") return;

    const new_exp = $(newExpense(exp_name.val(),exp_amount.val()))

    //expense: delete
    new_exp.find(".delete").click(function () {
        new_exp.remove()
    })
    exp_list.append(new_exp)
    exp_name.val("") 
    exp_amount.val("")
}

$(document).ready(function () {
    const addButton = $("#add-button");
    addButton.click(addExpense);
  
    $("#exp-name").keyup(function (event) {  
      if (event.keyCode === 13) {
        addExpense()
      }
    //   if the user pressed enter instead of the Add button
    }
    )
  });