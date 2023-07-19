$(document).ready(function () {
  const add_button = $("#add-button");
  add_button.click(addExpense);

  $("#exp-amount").keyup(function (event) {  
    if (event.keyCode === 13) {
      addExpense()
    }
  //   if the user pressed enter instead of the Add button
  }
  )
  function addExpense() {
    const exp_name = $("#exp-name").val().trim();
    const exp_amount =parseFloat($("#exp-amount").val());

    if (exp_name=== ""|| isNaN(exp_amount) || exp_amount <= 0){ //to handle cases of in-appropriate input
      return;
    }

    const new_exp = $("<tr></tr>");
    new_exp.append($("<td></td>").text(exp_name));
    new_exp.append($("<td></td>").text(exp_amount));
    new_exp.append($("<td></td>").html('<button class="delete-btn">Delete</button>')); //creating the delete btn
    
    $("#expense-table tbody").append(new_exp);
    const total_amount = parseFloat($("#total-amount").text()) + exp_amount;// updating the total
    $("#total-amount").text(total_amount);

  // Clearing the input
    $("#exp-name").val("");
    $("#exp-amount").val("");
  }

  // deleting an expense (from chat GPT)
  $("#expense-table").on("click", ".delete-btn", function() {
    const exp_to_delete = parseFloat($(this).parent().prev().text());
    const total_amount = parseFloat($("#total-amount").text()) - exp_to_delete;
    $("#total-amount").text(total_amount);

    $(this).closest("tr").remove(); //to remove the entire row including the delete button itself
  });
  });