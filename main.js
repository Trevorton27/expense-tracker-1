const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('table-body');
let rowCount = 0;

const deleteAllBtn = document.getElementById('delete-all');

deleteAllBtn.addEventListener('click', deleteAll);

function renderExpense(expense) {
  const id = 'row' + rowCount;
  const table = document.getElementById('table-body');
  const tableRow = document.createElement('tr');
  // create row
  // display date
  tableRow.setAttribute('id', id);
  const dateTableData = document.createElement('td');
  dateTableData.textContent = expense.date;
  tableRow.append(dateTableData);
  rowCount++;
  table.append(tableRow);
  // display category
  const categoryTableData = document.createElement('td');
  categoryTableData.textContent = expense.category;
  tableRow.append(categoryTableData);

  // display expense proper
  const expenseTableData = document.createElement('td');
  expenseTableData.textContent = expense.expense;
  tableRow.append(expenseTableData);

  // display currency
  const currencyTableData = document.createElement('td');
  currencyTableData.textContent = expense.currency;
  tableRow.append(currencyTableData);

  // display amount
  const amountTableData = document.createElement('td');
  amountTableData.textContent = expense.amount;
  tableRow.append(amountTableData);

  const deleteBtnCell = document.createElement('td');
  tableRow.append(deleteBtnCell);
  // display delete button
  let deleteExpenseBtn = document.createElement('button');
  deleteExpenseBtn.addEventListener('click', () => deleteFunction(id));
  deleteExpenseBtn.className = 'deleteExpenseBtn';
  deleteExpenseBtn.appendChild(document.createTextNode('x'));
  deleteBtnCell.appendChild(deleteExpenseBtn);
  // de qué se tratan éstos?
  //tableRow.append(amountTableData);
}

// call this when delete button is clicked:
function deleteFunction(id) {
  let tableRow = document.getElementById(id);
  tableRow.remove(tableRow);
}

function deleteAll() {
  table.removeChild();
}
// submit an expense
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date');
  const category = document.getElementById('category');
  const expense = document.getElementById('expense');
  const currency = document.getElementById('currency');
  const amount = document.getElementById('amount');

  const usersExpense = {
    date: date.value,
    category: category.value,
    expense: expense.value,
    currency: currency.value,
    amount: amount.value
  };

  renderExpense(usersExpense);
});
