function newExpense(exp,amount) {
    return `<li>
      <span class="delete">&#128465</span>
      <span class="text">${exp}</span>
      <span class="text">${amount}</span>
      <input type="text" style="display: none;"/>
    </li>`
  }

function addExpense() {
    const exp_name = $("#exp-name").val().trim();
    const exp_amount =parseFloat($("#exp-amount").val());
    const exp_list = $("#exp-list");

    if (exp_name=== ""|| isNaN(exp_amount) || exp_amount <= 0) return;

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

    const exp_list_items = $("#exp-list li"); // gets all list items
    const exp_table = $("<table></table>"); // Create a new table element
    const header_row = $("<th>List Items</th>");
    exp_table.append(header_row);

    // Add expenses as rows to the table
    exp_list_items.each(function() {
      const new_exp = $(this).text();
      const new_entries = $("<tr></tr>");
      new_entries.append($("<td></td>").text(new_exp));
      exp_table.append(new_entries);
    });

     // Hide the expenses list
     $("#exp-list").hide();

     // Append the table to the "table-container" div
     $("#exp-table").append(exp_table);
  });