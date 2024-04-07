let expenses = [];
let totalAmount = 0;
const categorySelect = document.getElementById('category_select');
const amountInput = document.getElementById('amount_input');
const InfoInput = document.getElementById('info');
const dateInput = document.getElementById('date_input');
const addBtn = document.getElementById('add_btn');
const expenseTableBody = document.getElementById('expense-table-Body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const info = InfoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (info === '') {
        alert('Please enter valid information');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    expenses.push({ category, amount, info, date });
    if (category === 'Income') {
        totalAmount += amount;
    } else if (category === 'Expense') {
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        const index = expenses.findIndex(expense => expense === currentExpense);
        const currentExpense = expenses[index];
        if (currentExpense.category === 'Income') {
            totalAmount -= currentExpense.amount;
        } else if (currentExpense.category === 'Expense') {
            totalAmount += currentExpense.amount;
        }
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);
        expenses.splice(index, 1);
    });

    categoryCell.textContent = category;
    AmountCell.textContent = amount;
    InfoCell.textContent = info;
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);
});


for(const expense of expenses){
    if (category === 'Income') {
        totalAmount += amount;
    } else if (category === 'Expense') {
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        const index = expenses.findIndex(expense => expense === currentExpense);
        const currentExpense = expenses[index];
        if (currentExpense.category === 'Income') {
            totalAmount -= currentExpense.amount;
        } else if (currentExpense.category === 'Expense') {
            totalAmount += currentExpense.amount;
        }
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);
        expenses.splice(index, 1);
    });

    categoryCell.textContent = category;
    AmountCell.textContent = amount;
    InfoCell.textContent = info;
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);
}